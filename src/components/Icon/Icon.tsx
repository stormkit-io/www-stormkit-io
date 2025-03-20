import React from 'react'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/material'

const imports = {
  Menu: React.lazy(() => import('@mui/icons-material/Menu')),
  LinkedIn: React.lazy(() => import('@mui/icons-material/LinkedIn')),
  YouTube: React.lazy(() => import('@mui/icons-material/YouTube')),
  GitHub: React.lazy(() => import('@mui/icons-material/GitHub')),
  Close: React.lazy(() => import('@mui/icons-material/Close')),
  Check: React.lazy(() => import('@mui/icons-material/Check')),
  Search: React.lazy(() => import('@mui/icons-material/Search')),
  X: React.lazy(() => import('@mui/icons-material/X')),
  Lock: React.lazy(() => import('@mui/icons-material/Lock')),
  ChevronRight: React.lazy(() => import('@mui/icons-material/ChevronRight')),
  Compare: React.lazy(() => import('@mui/icons-material/Compare')),
  KeyboardArrowDown: React.lazy(
    () => import('@mui/icons-material/KeyboardArrowDown')
  ),
  KeyboardCommandKey: React.lazy(
    () => import('@mui/icons-material/KeyboardCommandKey')
  ),
  ArrowBackIosNew: React.lazy(
    () => import('@mui/icons-material/ArrowBackIosNew')
  ),
  ArrowForwardIos: React.lazy(
    () => import('@mui/icons-material/ArrowForwardIos')
  ),
  ArrowForward: React.lazy(() => import('@mui/icons-material/ArrowForward')),
}

interface Props {
  name: keyof typeof imports
  sx?: SxProps & { fontSize?: number }
  fontSize?: 'small' | 'medium'
  color?: 'success' | 'error' | 'warning' | 'info'
}

const isClientSide = typeof window !== 'undefined'

export default function Icon({ name, ...props }: Props) {
  if (isClientSide) {
    if (imports.hasOwnProperty(name)) {
      // @ts-ignore
      const Component = imports[name]

      return (
        <React.Suspense>
          <Component {...props} />
        </React.Suspense>
      )
    }

    console.warn(`Icon "${name}" not found`)
  }

  let width = Number.isFinite(props.sx?.fontSize) ? props.sx?.fontSize : 24
  let height = Number.isFinite(props.sx?.fontSize) ? props.sx?.fontSize : 24

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        width,
        height,
        background: 'rgba(0,0,0,0.3)',
        borderRadius: '50%',
        ...props.sx,
      }}
    ></Box>
  )
}
