interface Prerender {
  route: string
  title?: string
  description?: string
}

const files = import.meta.glob('/content/docs/**/*.md', { as: 'raw' })

const routes: Prerender[] = [
  { route: '/' },

  // Prerender docs
  ...Object.keys(files).map((file) => ({
    route: file
      .replace('/content', '')
      .split('--')
      .join('/')
      .replace(/\/\d+-/, '/')
      .replace('.md', ''),
  })),
]

export default routes
