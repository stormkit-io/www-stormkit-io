import type { NavigationItem } from '~/components/DocsNav/DocsNav'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Menu, Close, GitHub, LinkedIn } from '@mui/icons-material'
import StormkitLogoText from '~/assets/logos/stormkit-logo-text-h--white.svg'
import DiscordLogo from '~/assets/images/discord.svg'
import DocSearch from './DocSearch'

interface Props {
  search?: NavigationItem[]
}

const links = [
  { path: '/docs', text: 'docs' },
  { path: '/blog', text: 'blog' },
  { path: '/blog/whats-new', text: 'whats new?' },
  { path: '/#pricing', text: 'pricing' },
  {
    path: 'https://github.com/stormkit-io',
    text: (
      <>
        <GitHub sx={{ mr: 0 }} />
        <Box
          component="span"
          sx={{ display: { xs: 'inline', md: 'none' }, ml: { xs: 1, md: 0 } }}
        >
          GitHub
        </Box>
      </>
    ),
    separator: true,
  },
  {
    path: 'https://www.linkedin.com/company/stormkit',
    text: (
      <>
        <LinkedIn sx={{ mr: 0, fill: 'rgb(29, 155, 240)' }} />
        <Box
          component="span"
          sx={{ display: { xs: 'inline', md: 'none' }, ml: { xs: 1, md: 0 } }}
        >
          Twitter
        </Box>
      </>
    ),
  },
  {
    path: 'https://discord.com/invite/6yQWhyY',
    text: '',
    icon: (
      <>
        <Box
          component="img"
          src={DiscordLogo}
          alt={'Discord'}
          sx={{ mr: { xs: 1, md: 0 }, display: 'inline-block', width: '23px' }}
        />
        <Box
          component="span"
          sx={{ display: { xs: 'inline', md: 'none' }, ml: { xs: 0.5, md: 0 } }}
        >
          Discord
        </Box>
      </>
    ),
  },
  {
    path: 'https://app.stormkit.io',
    text: 'login',
    separator: true,
  },
]

export default function Header({ search = [] }: Props) {
  const theme = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <Box
      sx={{
        bgcolor: 'rgba(0,0,0,0.3)',
        boxShadow: 2,
        px: { xs: 1, md: 0 },
      }}
    >
      <Box
        sx={{
          m: 'auto',
          py: 2,
          px: { xs: 1, md: 4 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ minWidth: 300, display: 'flex', flex: { xs: 1, md: 0 } }}>
          <Box sx={{ flex: 1 }}>
            <Link href="/" sx={{ display: 'block', width: 130 }}>
              <img src={StormkitLogoText} alt="Stormkit Logo" width="100%" />
            </Link>
          </Box>
          <IconButton
            sx={{ display: { md: 'none' } }}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu />
          </IconButton>
        </Box>
        <Box
          sx={{
            flex: 1,
            textTransform: 'uppercase',
            fontSize: 12.5,
            fontWeight: 600,
            display: { xs: isMenuOpen ? 'flex' : 'none', md: 'flex' },
            alignItems: { xs: 'flex-start', md: 'center' },
            flexDirection: { xs: 'column', md: 'row' },
            position: { xs: 'fixed', md: 'static' },
            left: { xs: 0, md: 'auto' },
            right: { xs: 0, md: 'auto' },
            top: { xs: 0, md: 'auto' },
            bottom: { xs: 0, md: 'auto' },
            bgcolor: { xs: 'black', md: 'transparent' },
            justifyContent: 'flex-end',
            zIndex: { xs: 10, md: 1 },
          }}
        >
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'space-between',
              width: '100%',
              py: 2,
              px: 1,
              borderBottom: '1px solid rgba(255,255,255,0.3)',
            }}
          >
            <Link href="/" sx={{ display: 'block', width: 130 }}>
              <img src={StormkitLogoText} alt="Stormkit Logo" width="100%" />
            </Link>
            <IconButton
              onClick={() => {
                setIsMenuOpen(false)
              }}
            >
              <Close />
            </IconButton>
          </Box>
          {search.length ? <DocSearch /> : ''}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              width: { xs: '100%', md: 'auto' },
              height: { xs: '100%', md: 'auto' },
            }}
          >
            {links.map((link) => (
              <Link
                key={link.path}
                color={theme.palette.primary.contrastText}
                onClick={() => {
                  setIsMenuOpen(false)
                }}
                target={link.path.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.path.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                sx={{
                  ml: { xs: 0, md: 2 },
                  p: { xs: 2, md: 0 },
                  display: 'inline-flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  opacity: 0.7,
                  transition: 'opacity 0.25s ease-in-out',
                  width: { xs: '100%', md: 'auto' },
                  borderBottom: {
                    xs: '1px solid rgba(255,255,255,0.3)',
                    md: 'none',
                  },
                  ':hover': { opacity: 1 },
                  ...(link.separator
                    ? {
                        borderLeft: {
                          xs: 'none',
                          md: '1px solid rgba(255,255,255,0.3)',
                        },
                        pl: { md: 2 },
                      }
                    : {}),
                }}
                href={link.path}
              >
                {link.text}
                {link.icon}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
