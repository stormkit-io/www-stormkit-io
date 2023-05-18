import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function WhyFreeTrial() {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          fontSize: { xs: 24, md: 48 },
          textAlign: 'center',
          overflow: 'hidden',
          position: 'relative',
          mb: 4,
        }}
      >
        Why Free Trial?
      </Typography>
      <Box
        maxWidth="768px"
        boxShadow={6}
        sx={{ bgcolor: 'rgba(0,0,0,0.1)', p: 4, mx: 'auto' }}
      >
        <Typography sx={{ mb: 2, fontSize: 20 }}>
          At Stormkit, we believe in creating a top-quality product and
          providing the best possible experience to our users. As a bootstrapped
          company with just two passionate co-founders behind the project, we
          have poured our hearts and souls into developing a solution that meets
          your needs.
        </Typography>
        <Typography sx={{ mb: 2, fontSize: 20 }}>
          To ensure that we can continue delivering a high-quality product, we
          have decided to introduce a free trial period. This allows us to focus
          our resources and attention on users who are genuinely interested in
          exploring our offering. By offering a free trial, we can better cater
          to the needs of our serious users and provide them with the support
          and features they require.{' '}
        </Typography>
        <Typography sx={{ mb: 2, fontSize: 20 }}>
          It's important to note that we have no external funding. We rely
          solely on the revenue generated from our product to fuel our growth
          and development. By choosing to take part in our free trial, you are
          not only getting a chance to experience the full potential of our
          product but also supporting an independent, self-funded venture.
        </Typography>
        <Typography sx={{ mb: 2, fontSize: 20 }}>
          Your feedback and engagement during the trial period play a crucial
          role in helping us refine and enhance our offering. Thank you for
          considering our free trial. We value your support and look forward to
          providing you with an exceptional product experience. Together, we can
          continue to build and improve the services that meet your needs and
          exceed your expectations.
        </Typography>
      </Box>
    </Box>
  )
}
