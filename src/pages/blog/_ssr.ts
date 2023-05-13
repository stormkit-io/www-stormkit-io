import type { NavigationItem } from '~/components/DocsNav/DocsNav'
import { parseAttributes, toTitleCase } from '~/helpers/markdown'

const files = import.meta.glob('/content/blog/*.md', { as: 'raw' })

interface Params {
  title?: string
}

export const fetchData: FetchDataFunc = async ({ title }: Params) => {
  let foundFile: string | undefined
  const titleLowercase = title?.toLowerCase()
  const navigation: NavigationItem[] = []
  const keys = Object.keys(files)

  for (let file of keys) {
    const fileName = file.replace('/content/blog/', '').replace('.md', '')

    if (fileName === titleLowercase) {
      foundFile = file
    }

    const { description, date } = parseAttributes(await files[file]())

    navigation.push({
      path: fileName,
      text: toTitleCase(fileName.replace(/-/g, ' ')),
      description,
      date,
      active: foundFile === file,
    })
  }

  navigation.sort((n1, n2) => {
    const date1 = n1.date || ''
    const date2 = n2.date || ''
    return date1 < date2 ? 1 : date1 > date2 ? -1 : 0
  })

  if (!foundFile || !files[foundFile]) {
    return { head: {}, context: { navigation } }
  }

  const content = await files[foundFile]()
  const attrs = parseAttributes(content)

  const index = content.indexOf('---', 2)
  const article = index > -1 ? content.slice(index + 4) : content

  return {
    head: {
      title: attrs.title,
      description: attrs.description,
    },
    context: {
      content: article,
      navigation,
    },
  }
}
