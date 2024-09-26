import * as fs from 'node:fs'
import * as path from 'node:path'
import { parseAttributes, toTitleCase } from '~/helpers/markdown'

const files = import.meta.glob('/content/docs/*.md', {
  query: '?raw',
  import: 'default',
})

interface Doc {
  id: number
  pageTitle?: string // This is the title used in the
  contentTitle?: string
  description?: string
  url?: string
  keywords?: string
}

export default async function generateDocs() {
  const docs = Object.keys(files)
  const documents: Doc[] = []

  await Promise.all(
    docs.map(async (file, index) => {
      const content = (await files[file]()) as string
      const metadata = parseAttributes(content)

      if (!metadata) {
        return console.error(`Error parsing file: ${file}`)
      }

      const fileNameWithoutExtension = path.basename(file, path.extname(file))

      // same logic taken from route
      const tmpPath = fileNameWithoutExtension
        .replace('/content', '')
        .split('--')
        .join('/')
        .replace(/\/\d+-/, '/')

      const url = `/docs/${tmpPath}`

      documents.push({
        id: index + 1,
        pageTitle: toTitleCase(tmpPath.split('/').pop()?.replace(/-/g, ' ')!),
        contentTitle: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        url,
      })

      return true
    })
  )

  const output = JSON.stringify(documents, null, 2)
  fs.writeFileSync('src/search-docs.json', output, 'utf8')
}
