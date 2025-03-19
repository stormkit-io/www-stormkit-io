import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import Icon from '~/components/Icon'
import StormkitLogoText from '~/assets/logos/stormkit-logo-text-h--white.svg'

interface Props {
  setIsMenuOpen: (v: boolean) => void
}

export default function MobileMenuIcon({ setIsMenuOpen }: Props) {
  return (
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
        <Box
          component="img"
          src={StormkitLogoText}
          alt="Stormkit Logo"
          width="100%"
        />
      </Link>
      <IconButton
        onClick={() => {
          setIsMenuOpen(false)
        }}
      >
        <Icon name="Close" />
      </IconButton>
    </Box>
  )
}
