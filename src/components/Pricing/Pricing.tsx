import { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CheckBox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import SliderCloud, { SubscriptionTier } from './SliderCloud'
import SliderSelfHosted from './SliderSelfHosted'
import whatsIncludedCloud from './WhatsIncludedCloud'
import whatsIncludedSelfHosted from './WhatsIncludedSelfHosted'

type Mode = 'cloud' | 'self-hosted'
type Edition = 'premium' | ''

export default function Pricing() {
  const [mode, setMode] = useState<Mode>('self-hosted')
  const [edition, setEdition] = useState<Edition>('')
  const [tier, setTier] = useState<SubscriptionTier>('100')
  const [seats, setSeats] = useState<number>(1)

  const isCloud = useMemo(() => mode === 'cloud', [mode])

  return (
    <Box>
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
      </Box>
      <Box
        id="pricing"
        sx={{
          p: { xs: 2, md: 4 },
          mt: 4,
          mx: 'auto',
          width: '100%',
          bgcolor: 'rgba(0,0,0,0.3)',
          boxShadow: 12,
        }}
      >
        <Box
          sx={{
            mb: 4,
            textAlign: 'center',
            position: 'relative',
            display: { xs: 'flex', md: 'block' },
            flexDirection: { xs: isCloud ? 'row' : 'row-reverse', md: 'unset' },
            justifyContent: { xs: 'space-between', md: 'unset' },
          }}
        >
          <Box
            sx={{
              position: { xs: 'static', md: 'absolute' },
              p: 0,
              m: 0,
              top: { md: 4 },
              right: 0,
              display: isCloud ? 'none' : 'flex',
              alignItems: 'center',
            }}
          >
            <FormControlLabel
              control={
                <CheckBox
                  color="success"
                  checked={edition === 'premium'}
                  sx={{ mr: 0.5 }}
                  onChange={(e) => {
                    e.target.checked ? setEdition('premium') : setEdition('')
                  }}
                />
              }
              label="Premium edition"
            />
          </Box>
          <ToggleButtonGroup
            color="success"
            value={mode}
            exclusive
            onChange={(_: any, newMode) => {
              if (newMode) setMode(newMode as Mode)
            }}
            aria-label="Platform"
          >
            <ToggleButton value="cloud" sx={{ cursor: 'pointer' }}>
              Cloud
            </ToggleButton>
            <ToggleButton value="self-hosted" sx={{ cursor: 'pointer' }}>
              Self-Hosted
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {isCloud ? (
          <SliderCloud onTierChange={(t) => setTier(t)} />
        ) : (
          <SliderSelfHosted
            onSeatChange={(t) => setSeats(t)}
            edition={edition}
          />
        )}
        <Divider sx={{ mt: 4 }}>
          <Chip
            label="What's included?"
            sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
          />
        </Divider>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box
            sx={{
              width: '100%',
              textAlign: 'left',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2,
            }}
          >
            {(isCloud ? whatsIncludedCloud : whatsIncludedSelfHosted).map(
              (feature: any, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    className="fa-solid fa-square-check"
                    sx={{ color: 'success.main', mr: 1 }}
                  />
                  {isCloud ? feature(tier) : feature(seats, edition)}
                </Box>
              )
            )}
          </Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 5 }}
          href="https://app.stormkit.io"
          className="plausible-event-name=Cloud"
        >
          Get started now
        </Button>
      </Box>
    </Box>
  )
}
