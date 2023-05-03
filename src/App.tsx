import { Routes, Route, RouteProps } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import theme from './mui-theme'

interface Props {
  routes: RouteProps[]
}

const App: React.FC<Props> = ({ routes }) => {
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
