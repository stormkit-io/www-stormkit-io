import { TypeAnimation } from 'react-type-animation'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CheckIcon from '@mui/icons-material/Check'
import StormkitConnection from '~/components/StormkitConnection'

export default function StormkitDeploy() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        bgcolor: 'rgba(18,14,59,0.6)',
        py: 6,
        borderRadius: { xs: 0, md: 6 },
        minWidth: { xs: 0, md: 400 },
        color: 'white',
        transition: 'all 0.5s ease-in-out',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          bgcolor: 'rgba(255,255,255,0.025)',
          p: 2,
          fontSize: 16,
          fontFamily: 'monospace',
        }}
      >
        $ git push
      </Box>
      <StormkitConnection />
      <Box
        sx={{
          bgcolor: 'rgba(255,255,255,0.025)',
          display: 'flex',
          alignItems: 'center',
          p: 2,
          fontSize: 16,
          fontFamily: 'monospace',
        }}
      >
        <CheckIcon sx={{ color: 'green', mr: { xs: 1, md: 2 } }} />
        <Box component="span" sx={{ mr: 1 }}>
          Deployed as{' '}
        </Box>
        <TypeAnimation
          sequence={[
            'a Static Website',
            1000,
            'a Serverless Function',
            1000,
            'an API Function',
            1000,
            'a Hybrid App',
            1000,
          ]}
          wrapper="span"
          speed={75}
          cursor={false}
          style={{
            whiteSpace: 'pre-line',
            fontWeight: 600,
            color: theme.palette.info.contrastText,
          }}
          repeat={Infinity}
        />
      </Box>
    </Box>
  )
}
