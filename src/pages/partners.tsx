import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

interface Props {
  children: React.ReactNode
}

function Subtitle({ children }: Props) {
  return (
    <Typography
      variant="subtitle2"
      sx={{ fontSize: 20, fontWeight: 600, mt: 4 }}
    >
      {children}
    </Typography>
  )
}

export default function Partners() {
  const theme = useTheme()

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
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: { xs: 2, md: 4 },
          textAlign: 'center',
        }}
        maxWidth="768px"
      >
        <Typography
          variant="h1"
          sx={{ fontWeight: 600, fontSize: { xs: 24, md: 36 }, mb: 4 }}
        >
          Looking for an affiliate?
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2, fontSize: 20 }}>
          We share
          <Box component="span" sx={{ fontWeight: 600 }}>
            10% of our revenue
          </Box>
          for every customer you bring.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mb: 2, fontSize: 20, lineHeight: 1.25 }}
        >
          Reach us out through{' '}
          <Link color="secondary.dark" href="mailto:hello@stormkit.io">
            hello@stormkit.io
          </Link>{' '}
          with your details an dwe'll provide you a link that you can share with
          your audience.
        </Typography>
      </Box>
      <Footer maxWidth="lg" />
    </Box>
  )
}
