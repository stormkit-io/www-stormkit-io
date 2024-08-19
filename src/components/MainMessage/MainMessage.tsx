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
          mb: 6,
          mt: 12,
        }}
      >
        Why Stormkit?
      </Typography>
      <Box
        sx={{
          bgcolor: 'rgba(0,0,0,0.3)',
          p: 8,
          borderLeft: '3px solid white',
          mb: 6,
        }}
      >
        Stormkit is for teams seeking <b>full control</b> over their
        infrastructure, a <b>predictable pricing model</b>, freedom from vendor
        lock-in, and the capability to build and manage modern frontend stacks.
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          columnGap: 10,
          rowGap: 5,
        }}
      >
        <Box>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Competitive Pricing
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            Our pricing model is transparent. We offer a few pricing tiers, with
            clear limits and no add-ons.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Private Cloud
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            We offer support for integrating Stormkit into your Private Cloud.
            Experience the benefits of a modern stack while maintaining maximum
            control for your enterprise.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Personal Service
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            As a bootstrapped company, we prioritize your needs. If our standard
            pricing or features don't align with your requirements, we'll
            collaborate with you to achieve the desired outcome.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Security and Compliance
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            We prioritize your security and compliance needs, ensuring that your
            applications are protected and meet regulatory standards across
            various industries.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            No Vendor Lock-In
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            Every feature in our offering is crafted with the explicit aim of
            ensuring users are not bound to any particular vendor or proprietary
            technology.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Strong Feature Set
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            Our platform is equipped with a powerful array of tools, ensuring
            that developers have everything they require to build, deploy, and
            scale applications seamlessly.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
