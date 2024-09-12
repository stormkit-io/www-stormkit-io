import { useTheme } from '@mui/material/styles'
import { useParams } from 'react-router'
import Box from '@mui/material/Box'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import DocsNav from '~/components/DocsNav'
import ImageOverlay from '~/components/ImageOverlay'
import { withContent } from '~/helpers/markdown'
import { fetchData } from './_ssr'
import { purple, grey } from '@mui/material/colors'

// Required for SSR
export { fetchData } from './_ssr'

export default function DocTitle() {
  const theme = useTheme()
  const params = useParams()
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
        color: theme.palette.primary.contrastText,
      }}
      className={params.category?.toLowerCase() || 'welcome'}
    >
      <Header search={navigation} />
      <ImageOverlay content={content} navigation={navigation} />
      <Box
        maxWidth="none"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          mx: 'auto',
          flexGrow: 1,
          width: '100%',
          mb: 4,
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
              lineHeight: 2,
              '& summary': {
                cursor: 'pointer',
                bgcolor: 'rgba(0,0,0,0.3)',
                mb: 2,
                p: 2,
                ':hover': {
                  bgcolor: 'rgba(0,0,0,0.5)',
                },
                '& span:first-child': {
                  color: purple[400],
                  display: 'inline-block',
                  width: '4rem',
                  ml: 1,
                },
                '& span:last-child': {
                  color: grey[200],
                },
              },
            }}
            maxWidth="768px"
          >
            <div id="blog-content" dangerouslySetInnerHTML={content} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
