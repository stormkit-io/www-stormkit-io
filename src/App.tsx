import { Routes, Route, RouteProps } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './mui-theme'

interface Props {
  routes: RouteProps[]
}

const App: React.FC<Props> = ({ routes }) => {
  useEffect(() => {
    setTimeout(() => {
      const referrer = new URL(document.referrer, 'https://www.stormkit.io')

      fetch('/api/analytics', {
        method: 'post',
        body: JSON.stringify({
          referrer: ['localhost', 'stormkit.io', 'www.stormkit.io'].includes(
            referrer.host.split(':')[0]
          )
            ? ''
            : referrer.host.split(':')[0],
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
    }, 1000)
  }, [])

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route}></Route>
          ))}
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
