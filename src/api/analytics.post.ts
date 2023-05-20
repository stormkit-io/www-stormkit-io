import http from 'node:http'
import fetch from 'node-fetch'
import * as jwt from 'jose'

async function logEvent(label: string) {
  const apiSecretKey = process.env.FEEZ_API_SECRET
  const apiPublicKey = process.env.FEEZ_API_PUBLIC

  if (!apiSecretKey || !apiPublicKey) {
    return
  }

  const jwtToken = await new jwt.SignJWT({
    apiPublicKey,
  })
    .setIssuedAt()
    .setExpirationTime('1h')
    .setProtectedHeader({ alg: 'HS256' })
    .sign(new TextEncoder().encode(apiSecretKey))

  return fetch('https://www.feez.ws/api/charts/data', {
    method: 'POST',
    body: JSON.stringify({
      chartId: '18848',
      label,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    },
  })
}

function readBody<T>(req: http.IncomingMessage): Promise<T> {
  return new Promise((resolve, reject) => {
    const data: Buffer[] = []

    if (req.method?.toUpperCase() === 'GET' || !req.method) {
      return resolve({} as T)
    }

    req
      .on('error', (err) => {
        reject(err)
      })
      .on('data', (chunk) => {
        data.push(chunk)
      })
      .on('end', () => {
        const body = Buffer.isBuffer(data) ? Buffer.concat(data) : data
        const isUrlEncoded =
          req.headers['content-type'] === 'application/x-www-form-urlencoded'

        if (isUrlEncoded) {
          return resolve(
            Object.fromEntries(new URLSearchParams(body.toString('utf-8'))) as T
          )
        }

        try {
          resolve(JSON.parse(body.toString('utf-8')))
        } catch {
          resolve({} as T)
        }
      })
  })
}

function referrer(ref?: string): string {
  if (!ref) {
    return 'Direct'
  }

  if (ref.match(/google|bing|yahoo|duckduckgo/)) {
    return 'SEO'
  }

  if (ref.match(/twitter|reddit|t\.co/)) {
    return 'Social Media'
  }

  if (ref.match(/indiehackers|dev\.to|medium\.com/)) {
    return 'Blog post'
  }

  return 'Other'
}

export default async function (
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  const body = await readBody<{ referrer?: string }>(req)

  await logEvent(referrer(body.referrer))

  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify({ ok: true }))
  res.end()
}
