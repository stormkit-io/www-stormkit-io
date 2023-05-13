import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Header from '~/components/Header'
import ImageOverlay from '~/components/ImageOverlay'
import { withContent } from '~/helpers/markdown'
import { fetchData } from './_ssr'
import { dateFormat } from '~/helpers/date'

// Required for SSR
export { fetchData } from './_ssr'

export default function BlogContent() {
  const theme = useTheme()
  const { content, navigation } = withContent(fetchData)

  const { text, date } = navigation.find((n) => n.active) || {}

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: theme.palette.background.default,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Header maxWidth="lg" />
      <ImageOverlay content={content} navigation={navigation} />
      <Box
        maxWidth="none"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          mx: 'auto',
          flexGrow: 1,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 1,
          }}
        >
          <Box
            sx={{
              p: { xs: 2, lg: 4 },
              pt: { xs: 2, lg: 2 },
              mx: 'auto',
              flex: 1,
              bgcolor: 'rgba(0,0,0,0.05)',
              lineHeight: 2,
            }}
            maxWidth="768px"
          >
            <Typography
              variant="h1"
              sx={{ fontSize: 24, fontWeight: 600, mt: 4 }}
            >
              {text}
            </Typography>
            {date && (
              <Typography sx={{ opacity: 0.7, fontSize: 13, mb: 4 }}>
                {dateFormat(date)}
              </Typography>
            )}
            <div id="blog-content" dangerouslySetInnerHTML={content} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
