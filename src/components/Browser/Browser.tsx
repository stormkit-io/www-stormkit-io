import Box from '@mui/material/Box'
import {
  GitHub as BrowserIcon,
  Code as CodeIcon,
  Lock as LockIcon,
} from '@mui/icons-material'
import { Typography } from '@mui/material'

interface Props {
  children: React.ReactNode
  icon?: 'code' | 'browser'
  url?: string
  minHeight?: number
}

export default function Browser({
  children,
  icon,
  url,
  minHeight = 160,
}: Props) {
  return (
    <Box>
      <Box
        sx={{
          height: 36,
          bgcolor: 'rgba(0,200,200,0.1)',
          borderTopRightRadius: 4,
          borderTopLeftRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          {['red', 'yellow', 'green'].map((bgcolor) => (
            <Box
              key={bgcolor}
              sx={{
                bgcolor,
                width: 12,
                height: 12,
                borderRadius: '50%',
                opacity: 0.5,
                mr: 1.5,
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {icon === 'code' && <CodeIcon sx={{ width: 16 }} />}
          {icon === 'browser' && <BrowserIcon sx={{ width: 16 }} />}
          {url && (
            <>
              <LockIcon sx={{ mr: 1, color: 'green', width: 16 }} />
              <Typography component="span" sx={{ fontSize: 12 }}>
                {url}
              </Typography>
            </>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          fontFamily: 'monospace',
          bgcolor: 'black',
          p: 2,
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
          minHeight,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
