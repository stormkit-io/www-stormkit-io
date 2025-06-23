import { Routes, Route, RouteProps } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import theme from './mui-theme'

interface Props {
  routes: RouteProps[]
  cache: EmotionCache
}

export default function App({ routes, cache }: Props) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ bgcolor: 'background.default' }}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route}></Route>
            ))}
          </Routes>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}
