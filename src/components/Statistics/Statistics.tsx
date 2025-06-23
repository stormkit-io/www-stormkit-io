import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import TestimonialsElham from './TestimonialsElham'
import TestimonialsValpiccola from './TestimonialsValpiccola'

const numbers = [
  { number: '500m+', description: 'Requests served across all applications' },
  { number: '99.9%', description: 'Uptime reliability over the last 365 days' },
  {
    number: '47%',
    description:
      'Average infrastructure cost savings reported by Self-Hosted customers',
  },
  {
    number: '5x',
    description:
      'Faster development-to-production workflow compared to traditional workflows',
  },
]

export default function Statistics() {
  return (
    <>
      <Box
        id="statistics"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 2,
        }}
      >
        {numbers.map(({ number, description }) => (
          <Box
            key={number}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              p: 4,
              borderRadius: 2,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h2"
              component="div"
              sx={{ color: 'primary.contrastText' }}
            >
              {number}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ maxWidth: 660, mt: 8, mx: 'auto', textAlign: 'center' }}>
        <Typography sx={{ fontSize: 24, mb: 2 }}>
          “Stormkit reduced our deployment time for 500 websites from 24+ hours
          to just 7 minutes, while cutting our infrastructure costs by 60% for
          our team of 10 developers.”
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
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 2,
          mt: 8,
        }}
      >
        <TestimonialsElham />
        <TestimonialsValpiccola />
      </Box>
    </>
  )
}
