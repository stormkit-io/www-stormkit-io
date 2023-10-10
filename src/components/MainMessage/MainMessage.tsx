import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function MainMessage() {
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
          mb: 2,
        }}
      >
        Your Needs, Our Priority!
      </Typography>
      <Box
        maxWidth="768px"
        boxShadow={6}
        sx={{
          bgcolor: 'rgba(0,0,0,0.1)',
          p: 4,
          mx: 'auto',
          textAlign: 'justify',
        }}
      >
        <Typography sx={{ mb: 2, fontSize: 20 }}>
          As a proud bootstrapped company, we possess the unique advantage of
          prioritizing your needs above all else. Should you not find a pricing
          package that perfectly aligns with your requirements or if you're
          seeking specific features tailored to your product, we encourage you
          to get in touch via hello@stormkit.io or Discord. Your vision is our
          mission, and we're here to make it a reality.
        </Typography>
      </Box>
    </Box>
  )
}
