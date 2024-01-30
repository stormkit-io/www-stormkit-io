import { StaticRouter } from 'react-router-dom/server'
import { renderToString } from 'react-dom/server'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import serverless from '@stormkit/serverless'
import createRoutes from './routes'
import Context from './context'
import App from './App'

interface RenderReturn {
  status: number
  content: string
  head: string
}

export type RenderFunction = (url: string, seo?: SEO) => Promise<RenderReturn>

const defaultSEO: SEO = {
  title: 'Effortlessly deploy serverless full stack JavaScript applications',
  description:
    'Stormkit is a serverless platform to deploy full stack javascript applications. Seamlessly integrated with Git, Stormkit offers an array of powerful features including application previews, instant scaling, code injections, cronjobs, feature flags, custom storage, and so much more. Streamline your deployment process and let Stormkit handle the heavy lifting, so you can focus on crafting exceptional applications.',
  domain: {
    name: 'Stormkit.io',
    url: 'https://stormkit.io',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@stormkitio',
    imageLarge: `https://www.stormkit.io/stormkit-2-1.png`,
  },
}

export const render: RenderFunction = async (url, seo) => {
  const { routes, head, context } = await createRoutes(url)
  const tags = {
    ...defaultSEO,
    ...JSON.parse(JSON.stringify(head || {})),
    ...JSON.parse(JSON.stringify(seo || {})),
  }

  // Prefix the title with the domain.name property.
  tags.title = tags.title + ` - Stormkit`

  return {
    status: 200,
    content:
      renderToString(
        <Context.Provider value={context}>
          <StaticRouter location={url}>
            <App routes={routes} />
          </StaticRouter>
        </Context.Provider>
      ) +
      (context
        ? `<script>window.CONTEXT = ${JSON.stringify(context)}</script>`
        : ''),
    head: [
      `<title>${tags.title}</title>`,
      `<meta charset="utf-8" />`,
      `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
      `<meta name="description" content="${tags.description}" />`,
      `<meta property="og:title" content="${tags.title}" />`,
      `<meta property="og:url" content="${tags.domain?.url}" />`,
      `<meta property="og:description" content="${tags.description}" />`,
      `<meta property="og:image" content="${tags.domain?.url}/stormkit-og-image.png" />`,
      `<meta name="twitter:card" content="${tags.twitter!.card}" />`,
      `<meta name="twitter:creator" content="${tags.twitter!.creator}" />`,
      `<meta name="twitter:title" content="${tags.title}" />`,
      `<meta name="twitter:description" content="${tags.description}" />`,
      `<meta name="twitter:image" content="${tags.twitter!.imageLarge}" />`,
      `<link rel="apple-touch-icon" href="/stormkit-logo.png"/>`,
      `<link rel="icon" type="image/svg+xml" href="/stormkit-logo.png" />`,
      `<link href="/src/index.css" rel="stylesheet" />`,
    ]
      .join('\n')
      .trim(),
  }
}

// This handler add support for Stormkit environment. This is
// the entry point of the serverless application.
export const handler = serverless(async (req: any, res: any) => {
  // We are in assets folder
  const dir = path.dirname(fileURLToPath(import.meta.url))
  const html = fs.readFileSync(path.join(dir, './index.html'), 'utf-8')

  const { status, content, head } = await render(
    req.url?.split(/\?#/)[0] || '/'
  )

  res.writeHead(status, 'OK', { 'Content-Type': 'text/html; charset=utf-8' })
  res.write(
    html
      .replace('</head>', `${head}</head>`)
      .replace(`<div id="root"></div>`, `<div id="root">${content}</div>`)
  )
  res.end()
})
