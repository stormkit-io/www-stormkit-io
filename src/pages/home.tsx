import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Header from '~/components/Header'
import Illustration from '~/components/Illustration'

const MAX_WIDTH_MD = 600

export default function Home() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: theme.palette.background.default,
      }}
    >
      <Header />
      <Box
        sx={{ flex: 1, m: 'auto', color: theme.palette.primary.contrastText }}
        maxWidth="xl"
      >
        <Typography
          variant="h1"
          sx={{
            mt: { xs: 4, md: 12 },
            fontWeight: 600,
            fontSize: { xs: 36, md: 48 },
            maxWidth: MAX_WIDTH_MD,
            textAlign: 'center',
          }}
        >
          Build, deploy and scale your web apps seamlessly
        </Typography>
        <Typography
          variant="h2"
          sx={{
            mt: 2,
            fontWeight: 200,
            fontSize: { xs: 20 },
            maxWidth: MAX_WIDTH_MD,
            textAlign: 'center',
            opacity: 0.7,
          }}
        >
          All you need to build your Javascript products, with a simple pricing.
        </Typography>
        <Box sx={{ maxWidth: MAX_WIDTH_MD, textAlign: 'center', mt: 4 }}>
          <Button variant="contained" color="secondary" size="large">
            Start your free trial
          </Button>
        </Box>
      </Box>

      <Box
        maxWidth="xl"
        sx={{
          width: '100%',
          mx: 'auto',
          my: { xs: 4, md: 16 },
        }}
      >
        <Illustration />
      </Box>
    </Box>
  )
}
