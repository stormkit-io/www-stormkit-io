import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { grey } from '@mui/material/colors'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Illustration from '~/components/Illustration'
import Pricing from '~/components/Pricing'
import MainMessage from '~/components/MainMessage'
import Statistics from '~/components/Statistics'
import { useScrollToHash } from '~/helpers/scroll'

const MAX_WIDTH_MD = 800

export default function Home() {
  useScrollToHash()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'primary.contrastText',
      }}
    >
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          m: 'auto',
          px: { xs: 2, md: 0 },
          minHeight: '60vh',
        }}
        maxWidth="xl"
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
            fontSize: { xs: 24, md: 48 },
            maxWidth: MAX_WIDTH_MD,
            textAlign: 'center',
          }}
        >
          Deploy, Scale, and Own Your Web Apps. No Vendor Lock-In.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            mt: 2,
            fontSize: { xs: 15, md: 17 },
            maxWidth: 700,
            lineHeight: 1.75,
            textAlign: 'center',
            color: grey[400],
          }}
        >
          Stormkit gives development teams full control, faster CI/CD, and up to
          47% lower infrastructure costs, all on your own terms. From
          side-projects, to Enterprise scale.
        </Typography>
        <Box
          sx={{
            maxWidth: MAX_WIDTH_MD,
            textAlign: 'center',
            mt: { xs: 8, md: 4 },
          }}
        >
          <Button
            variant="text"
            color="primary"
            size="large"
            href="https://app.stormkit.io"
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              mr: { xs: 0, md: 2 },
            }}
          >
            Launch in 5 minutes
            <ArrowForwardIcon sx={{ mr: 0, ml: 1, fontSize: 16 }} />
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/docs/self-hosting/getting-started"
          >
            Try Self-Hosted CI/CD
            <ArrowForwardIcon
              sx={{ mr: 0, ml: 1, fontSize: 16, transform: 'rotate(-45deg)' }}
            />
          </Button>
        </Box>
      </Box>

      <Box
        id="feature-preview"
        sx={{
          width: '100%',
          bgcolor: 'page.container',
          py: 8,
          mt: { xs: 8, md: 12 },
        }}
      >
        <Box maxWidth="xl" sx={{ mx: 'auto' }}>
          <Illustration />
        </Box>
      </Box>

      <Box
        id="statistics"
        maxWidth="lg"
        sx={{
          width: '100%',
          py: 8,
          mx: 'auto',
        }}
      >
        <Box maxWidth="xl" sx={{ mx: 'auto' }}>
          <Statistics />
        </Box>
      </Box>

      <Box
        id="pricing"
        sx={{
          width: '100%',
          bgcolor: 'page.container',
          py: 8,
        }}
      >
        <Box maxWidth="lg" sx={{ mx: 'auto' }}>
          <Pricing />
        </Box>
      </Box>

      <Box
        maxWidth="lg"
        sx={{
          width: '100%',
          mx: 'auto',
          mt: { xs: 3, md: 8 },
          mb: { xs: 6, md: 24 },
        }}
      >
        <MainMessage />
      </Box>
      <Footer maxWidth="lg" />
    </Box>
  )
}
