import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Link from '@mui/material/Link'
import StormkitLogoText from '~/assets/logos/stormkit-logo-text-h--white.svg'

interface Props {
  maxWidth?: string
}

export default function Header({ maxWidth = 'xl' }: Props) {
  const theme = useTheme()

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
          py: 2,
          px: maxWidth === 'none' ? { xs: 1, md: 4 } : 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" sx={{ display: 'block', width: 130 }}>
          <img src={StormkitLogoText} alt="Stormkit Logo" width="100%" />
        </Link>
        <Box>
          <Link color={theme.palette.primary.contrastText} href="/docs">
            Docs
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
