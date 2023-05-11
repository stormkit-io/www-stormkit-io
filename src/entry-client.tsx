import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import createRoutes from './routes'
import App from './App'
import Context from './context'
import './index.css'

declare global {
  interface Window {
    CONTEXT: any
  }
}

const mount = (children: React.ReactNode) => {
  const root = document.getElementById('root') as HTMLElement

  if (window.CONTEXT) {
    ReactDOM.hydrateRoot(root, children)
  } else {
    ReactDOM.createRoot(root).render(children)
  }
}

;(async () => {
  const { routes } = await createRoutes(window.location.pathname)
  const context = window.CONTEXT

  mount(
    <React.StrictMode>
      <CssBaseline />
      <Context.Provider value={context}>
        <BrowserRouter>
          <App routes={routes} />
        </BrowserRouter>
      </Context.Provider>
    </React.StrictMode>
  )
})()
