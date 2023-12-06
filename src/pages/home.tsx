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
      <Header maxWidth="lg" />
      <Box
        sx={{
          flex: 1,
          m: 'auto',
          px: { xs: 2, md: 0 },
        }}
        maxWidth="lg"
      >
        <Typography
          variant="h1"
          sx={{
            mt: { xs: 8, md: 12 },
            fontWeight: 600,
            fontSize: { xs: 24, md: 48 },
            maxWidth: MAX_WIDTH_MD,
            textAlign: 'center',
          }}
        >
          Full stack Javascript apps. Deployed to the Cloud.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            mt: 2,
            fontWeight: 200,
            fontSize: { xs: 15, md: 18 },
            maxWidth: MAX_WIDTH_MD,
            textAlign: 'center',
            opacity: 0.7,
          }}
        >
          Effortlessly launch your full stack JavaScript applications within
          minutes and shift your focus to what matters most, your application
          itself. Leverage our powerful suite of tools to enhance your
          development process.
        </Typography>
        <Box
          sx={{
            maxWidth: MAX_WIDTH_MD,
            textAlign: 'center',
            mt: { xs: 8, md: 4 },
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="https://app.stormkit.io"
          >
            Start your free trial
          </Button>
          <Button
            variant="contained"
            color="info"
            size="large"
            href="https://cal.com/svedova"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ml: 2 }}
          >
            Book a Demo
          </Button>
        </Box>
      </Box>

      <Box
        maxWidth="lg"
        sx={{
          width: '100%',
          mx: 'auto',
          mt: { xs: 8, md: 24 },
        }}
      >
        <Illustration />
      </Box>

      <Box
        maxWidth="lg"
        sx={{
          width: '100%',
          mx: 'auto',
          mt: { xs: 8, md: 24 },
        }}
      >
        <FeaturePreview />
      </Box>

      <Box
        maxWidth="lg"
        id="self-hosted"
        sx={{
          width: '100%',
          mx: 'auto',
          mt: { xs: 8, md: 24 },
        }}
      >
        <SelfHosted />
      </Box>

      <Box
        maxWidth="lg"
        id="pricing"
        sx={{
          width: '100%',
          mx: 'auto',
          mt: { xs: 8, md: 12 },
        }}
      >
        <Pricing />
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
