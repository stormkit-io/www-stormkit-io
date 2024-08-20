import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Illustration from '~/components/Illustration'
import FeaturePreview from '~/components/FeaturePreview'
import Pricing from '~/components/Pricing'
import MainMessage from '~/components/MainMessage'
import SelfHosted from '~/components/SelfHosted'
import { useScrollToHash } from '~/helpers/scroll'

const MAX_WIDTH_MD = 600

export default function Home() {
  const theme = useTheme()

  useScrollToHash()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: theme.palette.background.default,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Header />
      <Box
        sx={{
          flex: 1,
          m: 'auto',
          px: { xs: 2, md: 0 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        maxWidth="lg"
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            color="secondary"
            sx={{ fontWeight: 'bold' }}
          >
            4 oh 4
          </Typography>
          <Typography variant="h4" color="info" sx={{ mt: 4 }}>
            There is nothing under this link
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
