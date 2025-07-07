import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Illustration from '~/components/Illustration'
import Pricing from '~/components/Pricing'
import { useScrollToHash } from '~/helpers/scroll'
import Deepbase from '~/assets/logos/third-party/deepbase.svg'
import Workflow from './_components/Workflow'
import Hero from './_components/Hero'
import Enterprise from './_components/Enterprise'
import DeployNow from './_components/DeployNow'
import FAQ from './_components/FAQ'

const Section = ({ maxWidth = 'xl', sx, children, id }: BoxProps) => {
  return (
    <Box
      id={id}
      maxWidth={maxWidth}
      sx={{
        mx: 'auto',
        width: '100%',
        mb: { xs: 10, md: 25 },
        zIndex: 1,
        position: 'relative',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

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
          width: '100%',
          flex: 1,
          mx: 'auto',
          minHeight: 'calc(100vh - 104px)', // 104 is the header height
          px: { xs: 2, md: 0 },
          zIndex: 2,
          opacity: 0,
          animation: 'fadeInUp 1s ease-out 0.25s forwards',
        }}
        maxWidth="xl"
      >
        <Hero />
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            color="text.secondary"
            sx={{ mt: { xs: 10, md: 25 }, fontSize: 16 }}
          >
            Trusted by enterprises and teams
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              alt="Elham"
              src="https://cdn.prod.website-files.com/64996137a1e0a71956ea90eb/64997d15979306f7e737a767_logo.png"
              sx={{ mr: 4, width: 80 }}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.67)',
                p: 1,
                borderRadius: 2,
                mr: 4,
              }}
            >
              <Box
                component="img"
                src={Deepbase}
                alt="Deepbase"
                sx={{ width: 100 }}
              />
            </Box>
            <Box
              component="a"
              href="https://www.valpiccola.com"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                textDecoration: 'none',
              }}
              rel="noreferrer noopener"
            >
              <Box
                component="img"
                alt="Valpiccola"
                src="https://www.valpiccola.com/logo-small.png"
                sx={{ mr: 1, height: 32 }}
              />
              <Typography sx={{ fontWeight: 600 }}>Valpiccola</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Section id="feature-preview">
        <Illustration />
      </Section>

      <Section id="workflow">
        <Workflow />
      </Section>

      <Section id="enterprise">
        <Enterprise />
      </Section>

      <Section id="deploy-now">
        <DeployNow />
      </Section>

      <Section id="pricing">
        <Pricing />
      </Section>

      <Section id="faq">
        <FAQ />
      </Section>
      <Footer maxWidth="lg" />
    </Box>
  )
}
