import { TypeAnimation } from 'react-type-animation'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import CheckIcon from '@mui/icons-material/Check'
import stormkitLogo from '~/assets/logos/stormkit-logo-circle.svg'

export default function StormkitDeploy() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        bgcolor: 'rgba(18,14,59,0.6)',
        py: 4,
        borderRadius: { xs: 0, md: 6 },
        minWidth: { xs: 0, md: 400 },
        flexGrow: 1,
        boxShadow: 6,
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
      <Box sx={{ maxWidth: '100%', height: 150 }}>
        <Divider
          orientation="vertical"
          sx={{ maxWidth: '100%', overflow: 'hidden' }}
        >
          <Box
            component="img"
            sx={{
              width: 60,
              animation: 'rotate 2.5s ease-in-out infinite',
            }}
            alt="Stormkit Deploy"
            src={stormkitLogo}
          />
        </Divider>
      </Box>
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
