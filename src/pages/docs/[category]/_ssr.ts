import type { NavigationItem } from '~/components/DocsNav/DocsNav'

const files = import.meta.glob('/content/docs/**/*.md', { as: 'raw' })

export interface Attributes {
  title?: string
  date?: string // yyyy-mm-dd
  description?: string
  category?: string
  draft?: string
}

export const parseAttributes = (
  content: string,
  category?: string
): Attributes => {
  const attrs: Attributes = {}
  const index = content.indexOf('---', 2)

  if (index > -1) {
    content
      .slice(3, index)
      .split(/\n/g)
      .filter((i) => i)
      .forEach((str) => {
        const [key, ...value] = str.split(':')
        attrs[key.toLowerCase() as keyof Attributes] = value.join(':').trim()
      })
  }

  attrs.category = category
  return attrs
}

function toTitleCase(str: string) {
  const ignore = ['and', 'by', 'then', 'or']

  return str.replace(/\w\S*/g, function (txt) {
    if (ignore.indexOf(txt.toLowerCase()) > -1) {
      return txt
    }

    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  })
}

interface Params {
  category?: string
  title?: string
}

export const fetchData: FetchDataFunc = async ({
  category = 'welcome',
  title = 'getting-started',
}: Params) => {
  let foundFile: string | undefined
  const titleLowercase = title?.toLowerCase()
  const navigation: NavigationItem[] = []

  Object.keys(files).forEach((file) => {
    const fileNameWithoutPrefix = file
      .replace('/content/docs/', '')
      .replace('.md', '')

    let [fileCategory, fileTitle] = fileNameWithoutPrefix.split('--')

    fileTitle = fileTitle?.replace(/(^\d-)+/, '')

    if (category === fileCategory && fileTitle === titleLowercase) {
      foundFile = file
    }

    navigation.push({
      path: [fileCategory, fileTitle].join('/'),
      text: toTitleCase(fileTitle.replace(/-/g, ' ')),
      category: toTitleCase(fileCategory.replace(/^_/, '')),
      active: foundFile === file,
    })
  })

  if (!foundFile || !files[foundFile]) {
    return { head: {}, context: { navigation } }
  }

  const content = await files[foundFile]()
  const attrs = parseAttributes(content, category)

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
