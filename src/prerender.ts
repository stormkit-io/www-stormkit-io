interface Prerender {
  route: string
  title?: string
  description?: string
}

const docs = import.meta.glob('/content/docs/**/*.md', { as: 'raw' })
const blog = import.meta.glob('/content/blog/*.md', { as: 'raw' })

const routes: Prerender[] = [
  { route: '/' },
  { route: '/404' },
  {
    route: '/policies/terms',
    title: 'Terms of Service',
    description: 'Read terms of service before using Stormkit',
  },
  {
    route: '/policies/privacy',
    title: 'Privacy policy',
    description: 'Read our privacy policy',
  },

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
    route: file
      .replace('/content', '')
      .replace('.md', '')
      .replace(/--[\d]+/, ''),
  })),
]

export default routes
