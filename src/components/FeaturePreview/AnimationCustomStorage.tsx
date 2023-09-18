import { useEffect, useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import StormkitConnection from '~/components/StormkitConnection'
import Browser from '~/components/Browser'
import { Divider, Stack, Typography } from '@mui/material'
import stormkitLogo from '~/assets/logos/deploy.svg'
import LinearProgress from '@mui/material/LinearProgress'
import { drawConnector } from '~/helpers/draw'

export default function AnimationCustomStorage() {
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
    <Box
      sx={{
        mt: 10,
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        gap: 15,
        flexDirection: "column"
      }}
    >
      <Box
        component="img"
        height={400}
        alt="Deploy your code to different targets"
        src={stormkitLogo}
      />

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
        You can easily deploy your applications to different CDN providers, such as Bunny CDN and Amazon S3, while maintaining the promise of a vendor lock-in-free experience.
      </Typography>
    </Box>
  )
}
