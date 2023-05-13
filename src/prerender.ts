interface Prerender {
  route: string
  title?: string
  description?: string
}

const docs = import.meta.glob('/content/docs/**/*.md', { as: 'raw' })
const blog = import.meta.glob('/content/blog/*.md', { as: 'raw' })

const routes: Prerender[] = [
  { route: '/' },

  // Prerender docs
  { route: '/docs' },
  ...Object.keys(docs).map((file) => ({
    route: file
      .replace('/content', '')
      .split('--')
      .join('/')
      .replace(/\/\d+-/, '/')
      .replace('.md', ''),
  })),

  // Prerender blog
  { route: '/blog' },
  ...Object.keys(blog).map((file) => ({
    route: file.replace('/content', '').replace('.md', ''),
  })),
]

export default routes
