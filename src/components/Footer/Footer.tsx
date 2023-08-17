import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { Twitter } from '@mui/icons-material'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import StormkitLogoText from '~/assets/logos/stormkit-logo-text-h--white.svg'
import DiscordLogo from '~/assets/images/discord.svg'

interface Props {
  maxWidth?: string
}

let lastWidth: string = 'lg'

interface LinkProps {
  path: string
  text: string
  icon?: React.ReactNode
  external?: boolean
}

const links: Array<{ name: string; links: LinkProps[] }> = [
  {
    name: 'company',
    links: [
      { path: '/partners', text: 'partners' },
      { path: '/#pricing', text: 'pricing' },
      { path: '/policies/privacy', text: 'privacy policy' },
      { path: '/policies/terms', text: 'terms' },
    ],
  },
  {
    name: 'resources',
    links: [
      { path: '/docs', text: 'docs' },
      { path: '/blog', text: 'blog' },
      { path: '/blog/whats-new', text: 'whats new?' },
      { path: '/docs/welcome/contributing', text: 'contribute' },
      { path: '/blog/faq', text: 'FAQ' },
      {
        path: 'https://status.stormkit.io/',
        text: 'status',
        external: true,
      },
    ],
  },
  {
    name: 'connect with us',
    links: [
      {
        path: 'https://twitter.com/stormkitio',
        text: 'twitter',
        external: true,
        icon: <Twitter sx={{ mr: 1, fill: 'rgb(29, 155, 240)' }} />,
      },
      {
        path: 'https://discord.com/invite/6yQWhyY',
        text: 'Discord',
        icon: (
          <Box
            component="img"
            src={DiscordLogo}
            alt={'Discord'}
            sx={{ mr: 1, display: 'inline-block', width: '24px' }}
          />
        ),
      },
    ],
  },
]

export default function Footer({ maxWidth = lastWidth }: Props) {
  const theme = useTheme()
  lastWidth = maxWidth

  return (
    <Box
      sx={{
        bgcolor: 'rgba(0,0,0,0.25)',
        boxShadow: 2,
        px: { xs: 1, md: 0 },
      }}
    >
      <Box
        maxWidth={maxWidth}
        sx={{
          m: 'auto',
          px: maxWidth === 'none' ? { xs: 1, md: 4 } : 0,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ mt: 8, ml: { xs: 2, md: 0 } }}>
          <Link href="/" sx={{ display: 'block', width: 130 }}>
            <img src={StormkitLogoText} alt="Stormkit Logo" width="100%" />
          </Link>
          <Typography variant="body2">
            © {new Date().getFullYear()} Stormkit, Inc.
          </Typography>
        </Box>
        <Box sx={{ flex: 1, ml: { xs: 0, md: 16 }, py: 8 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              ml: { xs: 2, md: 0 },
              justifyContent: 'space-between',
            }}
          >
            {links.map((group) => (
              <Box
                key={group.name}
                sx={{
                  minWidth: `${100 / links.length}%`,
                  display: 'flex',
                  flexDirection: 'column',
                  mb: { xs: 4, md: 0 },
                  ':last-child': {
                    mb: { xs: 0 },
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontSize: 12,
                    mb: 2,
                  }}
                >
                  {group.name}
                </Typography>
                {group.links.map((link) => (
                  <Link
                    key={link.path}
                    color={theme.palette.primary.contrastText}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    sx={{
                      mb: 0.5,
                      display: 'inline-flex',
                      alignItems: 'center',
                      textTransform: 'capitalize',
                      textDecoration: 'none',
                      opacity: 0.7,
                      transition: 'opacity 0.25s ease-in-out',
                      ':hover': { opacity: 1 },
                    }}
                    href={link.path}
                  >
                    {link.icon}
                    {link.text}
                  </Link>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
