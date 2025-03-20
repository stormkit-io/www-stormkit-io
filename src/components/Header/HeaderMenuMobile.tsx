import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import { grey } from '@mui/material/colors'
import Icon from '~/components/Icon'
import StormkitLogoText from '~/assets/logos/stormkit-logo-text-h--white.svg'

interface Props {
  setIsMenuOpen: (v: boolean) => void
}

export default function HeaderMenuMobile({ setIsMenuOpen }: Props) {
  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'none' },
        justifyContent: 'space-between',
        width: '100%',
        p: 2,
        borderBottom: `1px solid ${grey[900]}`,
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
