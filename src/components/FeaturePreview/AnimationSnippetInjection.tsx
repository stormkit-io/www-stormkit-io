import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { ChatBubble } from '@mui/icons-material'
import StormkitConnection from '~/components/StormkitConnection'
import Browser from '~/components/Browser'

export default function AnimationSnippetInjection() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEnabled(!enabled)
    }, 2500)

    return () => {
      clearTimeout(timeout)
    }
  }, [enabled])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Browser url="app.stormkit.io/my-app" minHeight={0}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pb: 1,
            borderRadius: 1,
          }}
        >
          <Typography
            id="slider-1"
            gutterBottom
            sx={{
              fontSize: 14,
              opacity: 0.7,
              position: 'relative',
              top: '2px',
            }}
          >
            Feedback Button
          </Typography>
          <Switch
            color="secondary"
            checked={enabled}
            sx={{ ml: 2 }}
            onChange={() => setEnabled(!enabled)}
          />
        </Box>
      </Browser>
      <StormkitConnection height={100} />
      <Box sx={{ position: 'relative' }}>
        <Browser url="my-app.com" minHeight={0}>
          <Stack>
            <Skeleton width={'20%'} />
            <Skeleton width={'50%'} />
            <Skeleton width={'40%'} />
            <Skeleton width={'75%'} />
          </Stack>
          <Box
            sx={{
              position: 'absolute',
              right: 15,
              bottom: 15,
              opacity: 0.6,
              bgcolor: 'green',
              height: 40,
              width: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              visibility: enabled ? 'visible' : 'hidden',
            }}
          >
            <ChatBubble sx={{ fontSize: 16 }} />
          </Box>
        </Browser>
      </Box>
    </Box>
  )
}
