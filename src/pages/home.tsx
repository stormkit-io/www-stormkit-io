import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Illustration from '~/components/Illustration'
import FeaturePreview from '~/components/FeaturePreview'
import Pricing from '~/components/Pricing'
import WhyFreeTrial from '~/components/WhyFreeTrial'
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
          Build, deploy, and scale your full stack Javascript apps with ease
        </Typography>
        <Typography
          variant="h2"
          sx={{
            mt: 2,
            fontWeight: 200,
            fontSize: { xs: 16, md: 20 },
            maxWidth: MAX_WIDTH_MD,
            textAlign: 'center',
            opacity: 0.7,
          }}
        >
          Development with hassle free infrastructure! Explore our comprehensive suite of features, enjoy transparent pricing, and freedom from vendor lock-in.
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
        id="pricing"
        sx={{
          width: '100%',
          mx: 'auto',
          mt: { xs: 8, md: 24 },
        }}
      >
        <Pricing />
      </Box>

      <Box
        maxWidth="lg"
        id="why-free-trial"
        sx={{
          width: '100%',
          mx: 'auto',
          mt: { xs: 8, md: 24 },
          mb: { xs: 8, md: 12 },
        }}
      >
        <WhyFreeTrial />
      </Box>
      <Footer maxWidth="lg" />
    </Box>
  )
}
