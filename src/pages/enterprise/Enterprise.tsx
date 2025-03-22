import { useState } from 'react'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'
import ContactForm from '~/components/ContactForm'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Icon from '~/components/Icon'

export const fetchData: FetchDataFunc = async () => {
  return {
    head: {
      title: 'Enterprise-grade Solutions for Modern Teams',
      description:
        'Get a custom demo of our enterprise-grade development platform. Dedicated support, enhanced security & scalable infrastructure for modern teams.',
    },
    context: {},
  }
}

const benefits = [
  {
    title: 'Dedicated Account Management',
    desc: 'Get personalized support from a dedicated account manager who understands your business needs and technical requirements.',
  },
  {
    title: 'Custom SLAs and Priority Support',
    desc: 'Get personalized support from a dedicated account manager who understands your business needs and technical requirements.',
  },
  {
    title: 'Scalable Infrastructure',
    desc: 'Our enterprise solution scales with your organization, handling your growing development and deployment needs.',
  },
  {
    title: 'Custom features',
    desc: "We build custom features tailored to your organization's specific needs. Our team works closely with you to understand your unique workflows and develop solutions that seamlessly integrate with your existing systems.",
  },
]

export default function Enterprise() {
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
              fontSize: { xs: 28, md: 32 },
            }}
          >
            Enterprise-grade Solutions for Modern Teams
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
                    Transform your development workflow with our enterprise
                    platform
                  </Box>
                </Typography>
                <Typography sx={{ color: grey[400], mb: 2 }}>
                  We will create a customized plan for your organization,
                  addressing your unique challenges and helping you achieve your
                  business goals.
                </Typography>
                {benefits.map((b) => (
                  <Box key={b.title} sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Icon
                          name="CheckCircle"
                          sx={{ mr: 1, fontSize: 16, fill: '#78193B' }}
                        />
                        {b.title}
                      </Box>
                    </Typography>
                    <Typography sx={{ color: grey[400] }}>{b.desc}</Typography>
                  </Box>
                ))}
              </Box>
              <ContactForm setError={setError} setSuccess={setSuccess} />
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
