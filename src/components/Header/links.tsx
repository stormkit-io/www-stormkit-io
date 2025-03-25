import Box from '@mui/material/Box'
import DiscordLogo from '~/assets/images/discord.svg'

interface Section {
  title: string
  links: LinkProps[]
}

interface LinkProps {
  path: string
  id?: string
  subtext?: string
  icon?: React.ReactNode
  text?: React.ReactNode
  fill?: string
  children?: Section[]
  separator?: boolean
  maxWidth?: number
  position?: 'center' | 'left' | 'right'
}

const links: LinkProps[] = [
  {
    path: '/#resources',
    text: 'Resources',
    id: 'button-resources',
    maxWidth: 500,
    children: [
      {
        title: 'Company',
        links: [
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
          {
            path: '/policies/privacy',
            text: 'Privacy policy',
            subtext: 'Read our privacy policy',
          },
          {
            path: '/policies/terms',
            text: 'Terms',
            subtext: 'Read our terms and conditions',
          },
        ],
      },
      {
        title: 'Follow us',
        links: [
          {
            path: 'https://www.linkedin.com/company/stormkit',
            icon: 'LinkedIn',
            text: 'LinkedIn',
            fill: 'rgb(29, 155, 240)',
          },
          {
            path: 'https://www.youtube.com/@stormkit491',
            text: 'YouTube',
            icon: 'YouTube',
            fill: 'rgb(255 0 0)',
          },
          {
            path: 'https://x.com/stormkitio',
            icon: 'X',
            text: 'X',
            fill: 'white',
          },
          {
            path: 'https://discord.com/invite/6yQWhyY',
            text: 'Discord',
            icon: (
              <Box
                component="img"
                src={DiscordLogo}
                alt={'Discord'}
                sx={{
                  mr: 2,
                  display: 'inline-block',
                  width: '17px',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            ),
          },
        ],
      },
      {
        title: 'Comparisons',
        links: [
          { path: '/vs-vercel', text: 'vs Vercel', icon: 'Compare' },
          { path: '/vs-netlify', text: 'vs Netlify', icon: 'Compare' },
        ],
      },
    ],
  },
  { path: '/enterprise', text: 'Enterprise' },
  { path: '/docs', text: 'Docs' },
  { path: '/#pricing', text: 'Pricing' },
]

export default links
