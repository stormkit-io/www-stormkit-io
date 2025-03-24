import type { NavigationItem } from '~/components/DocsNav/DocsNav'
import Box from '@mui/material/Box'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

export default function Header() {
  return (
    <Box>
      <HeaderDesktop />
      <HeaderMobile />
    </Box>
  )
}
