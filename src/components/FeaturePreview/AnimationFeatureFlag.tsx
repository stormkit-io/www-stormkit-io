import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import Skeleton from '@mui/material/Skeleton'
import StormkitConnection from '~/components/StormkitConnection'
import Browser from '~/components/Browser'
import { Stack } from '@mui/material'

export default function AnimationFeatureFlag() {
  const theme = useTheme()
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
      <Box>
        <Box sx={{ flexGrow: 0.4, mb: 2 }}>
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
                Display Banner
              </Typography>
              <Switch
                color="secondary"
                checked={enabled}
                sx={{ ml: 2 }}
                onChange={() => setEnabled(!enabled)}
              />
            </Box>
          </Browser>
        </Box>
        <Box sx={{ flexGrow: 0.4, fontFamily: 'monospace', fontSize: 14 }}>
          <Browser icon="code" minHeight={0}>
            if (window.sk.features[
            <Box component="span" sx={{ opacity: 0.7 }}>
              "Display Banner"
            </Box>
            {']) {'}
            <Box sx={{ ml: 2, color: theme.palette.info.contrastText }}>
              displayBanner();
            </Box>
            {'}'}
          </Browser>
        </Box>
      </Box>
      <StormkitConnection height={100} />
      <Box>
        <Browser url="my-app.com" minHeight={0}>
          <Stack>
            <Skeleton width={'50%'} />
          </Stack>
          <Box
            sx={{
              opacity: 0.3,
              bgcolor: 'green',
              mt: 2,
              height: 30,
              width: '100%',
              display: 'flex',
              visibility: enabled ? 'visible' : 'hidden',
            }}
          ></Box>
        </Browser>
      </Box>
    </Box>
  )
}
