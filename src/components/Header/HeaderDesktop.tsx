import type { NavigationItem } from '~/components/DocsNav/DocsNav'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Icon from '~/components/Icon'
import DocSearch from './DocSearch'
import MenuIconDesktop from './MenuIconDesktop'
import LinksDesktop from './LinksDesktop'

interface Props {
  search?: NavigationItem[]
}

interface LinkProps {
  path: string
  text: React.ReactNode
  icon?: React.ReactNode
  separator?: boolean
}

const links: LinkProps[] = [
  { path: '/docs', text: 'docs' },
  { path: '/blog', text: 'blog' },
  { path: '/enterprise', text: 'Enterprise' },
  { path: '/blog/whats-new', text: 'whats new?' },
  { path: '/#pricing', text: 'pricing' },
  // {
  //   path: 'https://github.com/stormkit-io',
  //   text: (
  //     <>
  //       <Icon name="GitHub" sx={{ mr: 0 }} />
  //       <Box
  //         component="span"
  //         sx={{ display: { xs: 'inline', md: 'none' }, ml: { xs: 1, md: 0 } }}
  //       >
  //         GitHub
  //       </Box>
  //     </>
  //   ),
  //   separator: true,
  // },
  // {
  //   path: 'https://www.linkedin.com/company/stormkit',
  //   text: (
  //     <>
  //       <Icon name="LinkedIn" sx={{ mr: 0, fill: 'rgb(29, 155, 240)' }} />
  //       <Box
  //         component="span"
  //         sx={{ display: { xs: 'inline', md: 'none' }, ml: { xs: 1, md: 0 } }}
  //       >
  //         LinkedIn
  //       </Box>
  //     </>
  //   ),
  // },
  // {
  //   path: 'https://discord.com/invite/6yQWhyY',
  //   text: '',
  //   icon: (
  //     <>
  //       <Box
  //         component="img"
  //         src={DiscordLogo}
  //         alt={'Discord'}
  //         sx={{ mr: { xs: 1, md: 0 }, display: 'inline-block', width: '23px' }}
  //       />
  //       <Box
  //         component="span"
  //         sx={{ display: { xs: 'inline', md: 'none' }, ml: { xs: 0.5, md: 0 } }}
  //       >
  //         Discord
  //       </Box>
  //     </>
  //   ),
  // },
  // {
  //   path: 'https://app.stormkit.io',
  //   text: 'login',
  //   separator: true,
  // },
]

export default function Header({ search = [] }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'block' },
        bgcolor: 'page.container',
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
        <MenuIconDesktop setIsMenuOpen={setIsMenuOpen} />
        <Box
          sx={{
            flex: 1,
            fontSize: 12.5,
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'transparent',
            zIndex: 1,
          }}
        >
          <LinksDesktop setIsMenuOpen={setIsMenuOpen} />
          {search.length ? <DocSearch /> : false}
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <Button
              variant="outlined"
              color="info"
              href="/contact"
              sx={{ mr: 2 }}
            >
              Contact us
            </Button>
            <Button
              variant="outlined"
              color="info"
              href="https://app.stormkit.io"
            >
              Cloud Login
              <Icon
                name="ArrowForward"
                sx={{ ml: 1, fontSize: 16, transform: 'rotate(-45deg)' }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
