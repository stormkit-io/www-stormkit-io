import { useEffect, useState } from 'react'

class Strapi {
  baseurl: string = 'https://strapi.stormkit.io/api'
  bearer: string | undefined = process.env.STRAPI_API_KEY

  headers() {
    return {
      Authorization: `Bearer ${this.bearer}`,
      'Content-Type': 'application/json',
    }
  }
}

const strapi = new Strapi()

interface Tutorial {
  documentId: string
  title: string
  subtitle?: string
  slug: string
  description: string
  publishedAt: string
  updatedAt: string
  blocks: { __component: 'shared.rich-text'; body: string }[]
}

export const fetchTutorial = (slug: string): Promise<Tutorial> => {
  const req = new Request(
    `${strapi.baseurl}/articles?filters[slug][$eq]=${slug}&populate=blocks`,
    {
      headers: strapi.headers(),
    }
  )
  return fetch(req)
    .then((res) => res.json())
    .then(({ data }) => {
      if (data?.length === 0) {
        throw new Error('Tutorial not found')
      }

      return data?.[0]
    })
}

export const fetchTutorials = (): Promise<Tutorial[]> => {
  const req = new Request(
    `${strapi.baseurl}/articles?filters[$and][0][category][name][$eq]=Tutorial&sort=id:desc`,
    {
      headers: strapi.headers(),
    }
  )

  return fetch(req)
    .then((res) => res.json())
    .then(({ data }) => data)
}

export const useFetchTutorials = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    fetchTutorials()
      .then((data) => {
        setTutorials(data as Tutorial[])
      })
      .catch((err) => {
        console.log(err)

        setError(
          'An error occurred while fetching tutorials. Please try again later.'
        )
      })
  }, [])

  return { tutorials, loading, error }
}
