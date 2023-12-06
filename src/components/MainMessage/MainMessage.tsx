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
          paddingBottom: 5,
        }}
      >
        Why Stormkit?
      </Typography>
      <Box display="flex" flexWrap="wrap" width="100%">
        <Box sx={{ margin: 5, width: '25%' }}>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Competitive Pricing
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            We have few pricing tiers, with clear limits and no add-ons. All features
            are available to all tiers.
          </Typography>
        </Box>
        <Box sx={{ margin: 5, width: '25%' }}>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Various Infrastructure Options
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            For those who prefer to keep their infrastructure on premises, we
            provide a robust on prem option that empowers organizations with the
            control and security they desire. Moreover, we offer a white
            labeling option, enabling businesses to tailor our product to align
            seamlessly with their needs.
          </Typography>
        </Box>
        <Box sx={{ margin: 5, width: '25%' }}>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Empowering Flexibility
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            As a bootstrapped company, we possess the unique advantage of
            prioritizing your needs above all else. Should you not find a
            pricing package that perfectly aligns with your requirements or if
            you're seeking specific features tailored to your product, we can
            work with you to reach desired outcome.
          </Typography>
        </Box>
        <Box sx={{ margin: 5, width: '25%' }}>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Unleash Flexibility Across Leading CDNs
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            With Stormkit, users can effortlessly upload their code to various
            providers, including industry giants like Bunny CDN and AWS S3.
          </Typography>
        </Box>
        <Box sx={{ margin: 5, width: '25%' }}>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            No Vendor Lock In
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            Every feature in our offering is crafted with the explicit aim of
            ensuring users are not bound to any particular vendor or proprietary
            technology.
          </Typography>
        </Box>
        <Box sx={{ margin: 5, width: '25%' }}>
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
