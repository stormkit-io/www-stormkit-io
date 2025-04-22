import type { NavigationItem } from '~/components/DocsNav/DocsNav'
import { fetchTutorials, fetchTutorial } from '~/strapi'

const files = import.meta.glob('/content/blog/*.md', {
  query: '?raw',
  import: 'default',
})

interface Params {
  slug?: string
}

export const fetchData: FetchDataFunc = async ({ slug }: Params) => {
  const navigation: NavigationItem[] = []

  const tutorials = await fetchTutorials()

  tutorials.forEach((tutorial) => {
    navigation.push({
      path: tutorial.slug,
      title: tutorial.title,
      subtitle: tutorial.subtitle,
      description: tutorial.description,
      date: tutorial.publishedAt,
      active: slug === tutorial.slug,
    })
  })

  const returnValue = {
    head: {
      title: 'Tutorials',
      description: 'Learn how to use Stormkit',
    },
    context: {
      content: {},
      navigation,
    },
  }

  if (slug) {
    const tutorial = await fetchTutorial(slug)

    returnValue.head = {
      title: tutorial.title,
      description: tutorial.description,
    }

    returnValue.context.content =
      tutorial.blocks.find((block) => block.__component === 'shared.rich-text')
        ?.body || ''
  }

  return returnValue
}
