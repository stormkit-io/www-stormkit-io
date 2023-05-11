import type { NavigationItem } from '~/components/DocsNav/DocsNav'
import { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import markdown from 'markdown-it'
import prism from 'markdown-it-prism'
import Context from '~/context'
import Header from '~/components/Header'
import DocsNav from '~/components/DocsNav'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-diff'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-typescript'
import { fetchData } from './_ssr'

// Required for SSR
export { fetchData } from './_ssr'

const md = new markdown({ html: true, linkify: true }).use(prism)

export default function DocTitle() {
  const theme = useTheme()
  const params = useParams<{ category?: string; title?: string }>()
  const context = useContext(Context) || {}
  const [nav, setNav] = useState<NavigationItem[]>(context.navigation || [])
  const [content, setContent] = useState<string>(context.content || '')
  const [isClientSide, setIsClientSide] = useState(false)

  useEffect(() => {
    fetchData({
      category: params.category || 'welcome',
      title: params.title || 'getting-started',
    }).then((res) => {
      setNav(res.context.navigation)
      setContent(res.context.content)
      setIsClientSide(true)
    })
  }, [params])

  const mdContent = useMemo(() => {
    let __html: string

    // We get the content directly from the server side rendered content because
    // md.render does not behave the same server-side and client-side.
    if (isClientSide === false && typeof document !== 'undefined') {
      __html = document.querySelector('#blog-content')?.innerHTML || ''
    } else {
      __html = md.render(content || '')
    }

    return {
      __html,
    }
  }, [content, isClientSide])

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
        <DocsNav items={nav} />
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
            <div id="blog-content" dangerouslySetInnerHTML={mdContent} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
