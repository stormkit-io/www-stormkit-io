import { useEffect, useState } from 'react'
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
          height: 55,
          overflow: 'hidden',
        }}
      >
        Are you <span className="slide-up">{text}</span>
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
