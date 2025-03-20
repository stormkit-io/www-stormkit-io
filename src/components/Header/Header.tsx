import type { NavigationItem } from '~/components/DocsNav/DocsNav'
import Box from '@mui/material/Box'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

interface Props {
  search?: NavigationItem[]
}

export default function Header({ search = [] }: Props) {
  return (
    <Box>
      <HeaderDesktop search={search} />
      <HeaderMobile />
    </Box>
  )
}
