import React from 'react'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/material'

const imports = {
  Compare: React.lazy(() => import('@mui/icons-material/Compare')),
  Report: React.lazy(() => import('@mui/icons-material/Report')),
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
