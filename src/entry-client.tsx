import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import createRoutes from './routes'
import App from './App'
import Context from './context'
import createEmotionCache from './emotion-cache'
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

const cache = createEmotionCache()

;(async () => {
  const { routes } = await createRoutes(window.location.pathname)
  const context = window.CONTEXT

  mount(
    <React.StrictMode>
      <Context.Provider value={context}>
        <BrowserRouter>
          <App routes={routes} cache={cache} />
        </BrowserRouter>
      </Context.Provider>
    </React.StrictMode>
  )
})()
