import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { grey } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Browser from '~/components/Browser'
import { features } from './features'

export default function Illustration() {
  const currentButton = features[0]

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        margin: '0 auto',
        flexDirection: 'column',
        mx: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          border: `1px solid ${grey[900]}`,
          borderRadius: 2,
          mt: 4,
          position: 'relative',
          boxShadow:
            '0 0 20px 5px rgba(72, 80, 201, 0.4), 0 0 40px 20px rgba(72, 80, 201, 0.2)',
        }}
      >
        <Browser url="app.stormkit.io">
          <Box sx={{ p: 2 }}>
            <picture>
              <Box
                component="source"
                media="(max-width: 800px)"
                srcSet={`${currentButton.image}?size=800`}
              />
              <Box
                component="img"
                sx={{
                  width: '100%',
                  display: 'block',
                  m: 0,
                  p: 0,
                  borderRadius: 1,
                }}
                src={`${currentButton.image}?size=1150`}
                alt="Deployments"
              />
            </picture>
          </Box>
        </Browser>
      </Box>
      <Box sx={{ maxWidth: 660, mt: 8, mx: 'auto', textAlign: 'center' }}>
        <Typography sx={{ fontSize: { xs: 16, md: 24 }, mb: 2 }}>
          "Stormkit helped us cut deployment times from 24+ hours to 7 minutes,
          while cutting our infrastructure costs by 60%."
        </Typography>
        <Typography sx={{ fontSize: 16, mb: 2 }} color="text.secondary">
          Elham, Lead Developer
        </Typography>
        <Typography>
          <Button
            variant="contained"
            color="secondary"
            href="/blog/case-study-elham"
            sx={{ mt: 2, fontSize: 16 }}
          >
            Case study: Leading learning platform
            <ArrowForwardIcon sx={{ fontSize: 12, ml: 1 }} />
          </Button>
        </Typography>
      </Box>
    </Box>
  )
}
