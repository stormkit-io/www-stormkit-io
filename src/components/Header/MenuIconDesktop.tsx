import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import Icon from '~/components/Icon'
import StormkitLogoText from '~/assets/logos/stormkit-logo-text-h--white.svg'

interface Props {
  setIsMenuOpen: (v: boolean) => void
}

export default function MobileMenuDesktop({ setIsMenuOpen }: Props) {
  return (
    <Box sx={{ display: 'flex', flex: { xs: 1, md: 0 } }}>
      <Box sx={{ flex: 1 }}>
        <Link href="/" sx={{ display: 'block', width: 130, lineHeight: 1 }}>
          <Box
            component="img"
            src={StormkitLogoText}
            alt="Stormkit Logo"
            width="100%"
          />
        </Link>
      </Box>
      <IconButton
        sx={{ display: { md: 'none' } }}
        onClick={() => setIsMenuOpen(true)}
      >
        <Icon name="Menu" />
      </IconButton>
    </Box>
  )
}
