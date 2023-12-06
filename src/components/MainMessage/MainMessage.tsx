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
            Our pricing model is designed to provide exceptional value, ensuring
            that organizations not only enjoy a plethora of advanced features
            but also benefit from a predictable and transparent billing
            structure.
          </Typography>
        </Box>
        <Box sx={{ margin: 5, width: '25%' }}>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Various Infrastructure Options
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            We offer a versatile array of options to cater to diverse business
            requirements. For those who prefer to keep their infrastructure on
            premises, we provide a robust on prem option that empowers
            organizations with the control and security they desire. Our team is
            committed to guiding clients seamlessly through the setup process,
            ensuring a smooth transition and optimal integration with existing
            systems. Moreover, recognizing the importance of brand identity, we
            offer a white labeling option, enabling businesses to tailor our
            product to align seamlessly with their unique brand aesthetics.
          </Typography>
        </Box>
        <Box sx={{ margin: 5, width: '25%' }}>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Empowering Flexibility
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            As a proud bootstrapped company, we possess the unique advantage of
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
            Stormkit offers unparalleled flexibility in code deployment. With
            our platform, users can effortlessly upload their code to various
            providers, including industry giants like Bunny CDN and AWS S3. This
            flexibility enables you to seamlessly host your code through
            different Content Delivery Networks (CDNs), providing a dynamic
            approach to content delivery based on your specific needs. Whether
            you prioritize the global reach of Bunny CDN or the scalability of
            S3, Stormkit empowers you to choose the hosting provider that aligns
            perfectly with your performance, geographic, and budgetary
            requirements.
          </Typography>
        </Box>
        <Box sx={{ margin: 5, width: '25%' }}>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Simplicity Redefined for Fullstack JavaScript{' '}
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            With our meticulously crafted templates using ViteJS, you can
            kickstart your projects effortlessly. By embracing dependencies over
            monolithic frameworks, our templates empower developers to curate a
            tailored stack that precisely aligns with project requirements. This
            flexibility not only reduces unnecessary code and optimizes
            performance but also allows for a more scalable and maintainable
            codebase.
          </Typography>
        </Box>
        <Box sx={{ margin: 5, width: '25%' }}>
          <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 'bold' }}>
            Easy of Use
          </Typography>
          <Typography sx={{ mb: 2, fontSize: 15 }}>
            At Stormkit, user experience is at the forefront of our design
            philosophy. We have meticulously crafted our system to be
            exceptionally user friendly, ensuring that every feature is not only
            easily accessible but also intuitively discoverable.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
