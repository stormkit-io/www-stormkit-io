import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import StormkitLogoText from '~/assets/logos/stormkit-logo-text-h--white.svg'

export default function Header() {
  const theme = useTheme()

  return (
    <Box sx={{ bgcolor: 'rgba(0,0,0,0.25)', boxShadow: 2 }}>
      <Box
        maxWidth="xl"
        sx={{
          m: 'auto',
          py: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" sx={{ display: 'block', width: 130 }}>
          <img src={StormkitLogoText} alt="Stormkit Logo" width="100%" />
        </Link>
        <Typography color={theme.palette.primary.contrastText}>
          Hello
        </Typography>
      </Box>
    </Box>
  )
}
