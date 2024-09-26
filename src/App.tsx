import { Routes, Route, RouteProps } from 'react-router-dom'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import theme from './mui-theme'

interface Props {
  routes: RouteProps[]
}

export default function App({ routes }: Props) {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: 'background.default' }}>
          <Box
            sx={{
              maxWidth: '1560px',
              margin: '0 auto',
            }}
          >
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} {...route}></Route>
              ))}
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
