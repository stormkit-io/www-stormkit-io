import { useState } from 'react'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import ContactForm from '~/components/ContactForm'

export default function Contact() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

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
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            maxWidth: 960,
            textAlign: 'center',
            width: '100%',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              my: 4,
              fontSize: { xs: 28, md: 40 },
            }}
          >
            Contact us
          </Typography>
          <Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { md: 'repeat(2, minmax(0, 1fr))' },
                border: '1px solid rgba(0, 0, 0, 0.3)',
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderRadius: 2,
                p: { xs: 1, lg: 4 },
                mb: 4,
              }}
            >
              <Box sx={{ textAlign: 'left', p: { xs: 2, lg: 4 } }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  <Box component="span" sx={{ fontWeight: 'bold' }}>
                    Curious about what Stormkit can do for your organization?
                  </Box>
                </Typography>
                <Typography sx={{ color: grey[400] }}>
                  Our team will tailor a demonstration to your specific business
                  needs, exploring how our platform can accelerate your
                  development workflows and deployment processes. We'll walk
                  through our enterprise features, discuss flexible pricing
                  options, and help you set up a trial environment.
                </Typography>
              </Box>
              <ContactForm setSuccess={setSuccess} setError={setError} />
            </Box>
            {error && (
              <Alert variant="filled" color="error" sx={{ mb: 4 }}>
                {error}
              </Alert>
            )}
            {success && (
              <Alert variant="filled" color="success" sx={{ mb: 4 }}>
                Your contact request has been forwarded. You will be contacted
                soon on the provided email.
              </Alert>
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
