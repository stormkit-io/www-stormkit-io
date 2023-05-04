import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

let i = 0
let texts = ['an Indiehacker?', 'a Small Startup?']

export default function FeaturePreview() {
  const [text, setText] = useState(texts[0])

  useEffect(() => {
    const int = setInterval(() => {
      setText(texts[++i % texts.length])
    }, 3500)

    return () => {
      clearInterval(int)
    }
  }, [])

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          fontSize: { xs: 24, md: 48 },
          textAlign: 'center',
          overflow: 'hidden',
          position: 'relative',
          pr: { xs: 27, md: 45 },
        }}
      >
        Are you{' '}
        <Box
          component="span"
          className="slide-up"
          sx={{
            ml: { xs: 1, md: 2 },
            position: 'absolute',
            animation: 'slideUp 3.5s ease-in-out infinite',
          }}
        >
          {text}
        </Box>
      </Typography>
      <Typography
        variant="h3"
        sx={{
          mt: 1,
          fontSize: { xs: 16, md: 20 },
          textAlign: 'center',
          opacity: 0.7,
        }}
      >
        Then you are in the right place.
      </Typography>
    </>
  )
}
