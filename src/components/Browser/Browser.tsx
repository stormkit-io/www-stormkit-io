import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Icon from '~/components/Icon'

interface Props {
  children: React.ReactNode
  url?: string
  actionSlot?: React.ReactNode
}

export default function Browser({ children, url, actionSlot }: Props) {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: 'rgba(0,200,200,0.1)',
          borderTopRightRadius: 4,
          borderTopLeftRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
            justifyContent: 'center',
          }}
        >
          {url && (
            <Box
              sx={{
                py: 0.5,
                px: 2,
                m: 1,
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 3,
              }}
            >
              <Icon name="Lock" sx={{ mr: 1, color: 'green', width: 16 }} />
              <Typography component="span" sx={{ fontSize: 12 }}>
                {url}
              </Typography>
            </Box>
          )}
          {actionSlot}
        </Box>
      </Box>
      <Box
        sx={{
          fontFamily: 'monospace',
          bgcolor: 'black',
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
