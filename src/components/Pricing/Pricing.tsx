import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import PricingSlider, { SubscriptionTier } from './Slider'
import CheckIcon from '@mui/icons-material/Check'

const limits: Record<SubscriptionTier, { fns: string; bandwidth: string }> = {
  '100': {
    fns: '2.5m',
    bandwidth: '500GB',
  },
  '500': {
    fns: '5m',
    bandwidth: '1TB',
  },
  '1000': {
    fns: '10m',
    bandwidth: '2TB',
  },
  '1000+': {
    fns: '∞',
    bandwidth: '∞',
  },
}

const includedFeatures = [
  'Unlimited Seats',
  'Unlimited projects',
  (tier: SubscriptionTier) => `${limits[tier].fns} Serverless invocations`,
  (tier: SubscriptionTier) => `${limits[tier].bandwidth} Bandwidth`,
  'All free tiers',
  '30 days deployment retention',
  'Discord / Email support',
]

export default function Pricing() {
  const theme = useTheme()
  const [tier, setTier] = useState<SubscriptionTier>('100')

  return (
    <>
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: 24, md: 48 },
            textAlign: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          Simple, predictable pricing
        </Typography>
        <Typography
          variant="h3"
          sx={{
            mt: 1,
            fontSize: { xs: 15, md: 18 },
            textAlign: 'center',
            opacity: 0.7,
            maxWidth: 600,
            m: 'auto',
          }}
        >
          15 days free trial. No credit card required.
        </Typography>
      </Box>
      <Box
        id="pricing"
        sx={{
          p: { xs: 2, md: 4 },
          mt: { xs: 8, md: 12 },
          mx: 'auto',
          width: '100%',
          bgcolor: 'rgba(0,0,0,0.1)',
        }}
      >
        <PricingSlider onTierChange={(t) => setTier(t)} />
        <Divider sx={{ mt: 4 }}>
          <Chip
            label="What's included?"
            sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
          />
        </Divider>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Grid
            container
            sx={{ width: '100%', textAlign: 'left' }}
            rowSpacing={{ xs: 2 }}
          >
            {includedFeatures.map((feature, index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={4}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Typography
                  className="fa-solid fa-square-check"
                  sx={{ color: theme.palette.success.main, mr: 1 }}
                />
                <CheckIcon sx={{ color: 'green', mr: 2, ml: 0 }} />{' '}
                {typeof feature === 'string' ? feature : feature(tier)}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 5 }}
          href="https://app.stormkit.io"
        >
          Start your free trial
        </Button>
      </Box>
    </>
  )
}
