import { useState } from 'react'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { grey } from '@mui/material/colors'
import Button from '~/components/Button'
import Footer from '~/components/Footer'
import Header from '~/components/Header'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [desc, setDesc] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
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
            maxWidth: 800,
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
              <Box
                component="form"
                sx={{
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  p: { xs: 2, lg: 4 },
                  mb: 4,
                  borderRadius: 2,
                  'div[data-lastpass-icon-root]': { display: 'none' },
                }}
                onSubmit={(e) => {
                  e.preventDefault()

                  if (!email || !email.includes('@') || !email.includes('.')) {
                    return setError('Email is invalid.')
                  }

                  if (!desc) {
                    return setError(
                      'Your input will allow us get prepared for the call. Please provide some information.'
                    )
                  }

                  setLoading(true)

                  fetch('/api/enquiry', {
                    method: 'post',
                    body: JSON.stringify({ email, desc }),
                    headers: {
                      'content-type': 'application/json',
                    },
                  })
                    .then(async (res) => {
                      const data = await res.json()

                      if (data.ok) {
                        setError('')
                        return setSuccess(true)
                      }

                      return Promise.reject()
                    })
                    .catch(() => {
                      setSuccess(false)
                      setError(
                        'Something went wrong while submitting your enquiry. Please reach out to us at hello@stormkit.io'
                      )
                    })
                    .finally(() => {
                      setLoading(false)
                    })
                }}
              >
                <Box sx={{ mb: 4 }}>
                  <TextField
                    variant="outlined"
                    label="Business email"
                    name="email"
                    type="email"
                    placeholder="Your company email address"
                    fullWidth
                    autoComplete="off"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
                <Box>
                  <TextField
                    multiline
                    fullWidth
                    maxRows={5}
                    minRows={5}
                    value={desc}
                    onChange={(e) => {
                      setDesc(e.target.value)
                    }}
                    name="desc"
                    variant="outlined"
                    label="How can we help?"
                    placeholder="Help us understand better your needs and requirements"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Button
                    loading={loading}
                    variant="contained"
                    color="secondary"
                    type="submit"
                    fullWidth
                  >
                    Talk to Stormkit
                  </Button>
                </Box>
              </Box>
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
