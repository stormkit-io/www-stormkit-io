import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Header from '~/components/Header'
import DocsNav from '~/components/DocsNav'
import ImageOverlay from '~/components/ImageOverlay'
import { withContent } from '~/helpers/markdown'
import { fetchData } from './_ssr'

// Required for SSR
export { fetchData } from './_ssr'

export default function DocTitle() {
  const theme = useTheme()
  const { content, navigation } = withContent(fetchData, {
    defaultCategory: 'welcome',
    defaultTitle: 'getting-started',
  })

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
      <Header maxWidth="none" />
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
        <DocsNav items={navigation} />
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
            <div id="blog-content" dangerouslySetInnerHTML={content} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
