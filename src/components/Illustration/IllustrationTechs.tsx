import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import reactLogo from '~/assets/images/react.svg'
import angularLogo from '~/assets/images/angular.svg'
import vueLogo from '~/assets/images/vue.svg'
import nodePng from '~/assets/images/nodejs.png'
import html5 from '~/assets/images/html5.svg'
import svelteLogo from '~/assets/images/svelte.svg'
import jsLogo from '~/assets/images/js.svg'

const LOGO_SIZE = 50

function Logo({
  src,
  alt,
  padding = 20,
  mb = 2,
}: {
  src: string
  alt: string
  padding?: number
  mb?: number
}) {
  return (
    <Box
      sx={{
        width: LOGO_SIZE,
        height: LOGO_SIZE,
        bgcolor: 'rgba(235, 89, 89, 0.3)',
        borderRadius: 4,
        boxShadow: 12,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ stroke: 'white', width: LOGO_SIZE - padding }}
      />
    </Box>
  )
}

export default function Techs() {
  return (
    <>
      <Box
        sx={{
          mr: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo src={nodePng} alt="Deploy Node.js API" />
        <Divider orientation="vertical" sx={{ height: 30, mb: 2 }} />
        <Logo src={html5} alt="Deploy static HTML 5" padding={25} mb={0} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo src={reactLogo} alt="Deploy React apps" />
        <Divider orientation="vertical" sx={{ height: 30, mb: 2 }} />
        <Logo src={jsLogo} alt="Deploy JS apps" />
        <Divider orientation="vertical" sx={{ height: 30, mb: 2 }} />
        <Logo src={angularLogo} alt="Deploy angular apps" padding={10} />
      </Box>
      <Box
        sx={{
          ml: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo src={vueLogo} alt="Deploy Vue apps" />
        <Divider orientation="vertical" sx={{ height: 30, mb: 2 }} />
        <Logo src={svelteLogo} alt="Deploy Svelte apps" padding={25} mb={0} />
      </Box>
    </>
  )
}
