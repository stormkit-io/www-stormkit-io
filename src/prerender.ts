interface Prerender {
  route: string
  title?: string
  description?: string
}

const docs = import.meta.glob('/content/docs/**/*.md', { as: 'raw' })
const blog = import.meta.glob('/content/blog/*.md', { as: 'raw' })

const routes: Prerender[] = [
  { route: '/' },
  {
    route: '/policies/terms',
    title: 'Terms of Service',
    description: 'Read terms of service before using Stormkit',
  },
  {
    route: '/partners',
    title: 'Partners',
    description:
      'Looking for an affiliate? Suggest your audience Stormkit and earn money.',
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
    route: file.replace('/content', '').replace('.md', ''),
  })),
]

export default routes
