import Box from '@mui/material/Box'
import { GitHub as BrowserIcon, Code as CodeIcon } from '@mui/icons-material'

interface Props {
  children: React.ReactNode
  icon?: 'code' | 'browser'
  minHeight?: number
}

export default function Browser({
  children,
  icon = 'code',
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
