interface LinkProps {
  path: string
  text?: React.ReactNode
  subtext?: string
  icon?: React.ReactNode
  children?: LinkProps[]
  separator?: boolean
}

const links: LinkProps[] = [
  {
    path: '/#resources',
    text: 'Resources',
    children: [
      {
        path: '/blog',
        text: 'Blog',
        subtext: 'Latest developments and announcements',
      },
      {
        path: '/blog/whats-new',
        text: 'Changelog',
        subtext: 'Latest changes on the product',
      },
    ],
  },
  { path: '/docs', text: 'Docs' },
  { path: '/#pricing', text: 'Pricing' },
]

export default links
