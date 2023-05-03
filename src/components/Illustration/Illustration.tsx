import { useEffect, useRef } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { drawConnector } from '~/helpers/draw'
import IllustrationSKDeploy from './IllustrationSKDeploy'
import IllustrationTechs from './IllustrationTechs'

export default function Illustration() {
  const theme = useTheme()
  const box1Ref = useRef<HTMLElement>(null)
  const box2Ref = useRef<HTMLElement>(null)
  const path1Ref = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!box1Ref.current || !box2Ref.current) {
      return
    }

    drawConnector(path1Ref.current, box1Ref.current, box2Ref.current, {
      distortX: 100,
      distortY: 100,
    })
  }, [box1Ref, box2Ref, path1Ref])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        component="svg"
        id="tech-sk-deploy-connector"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="animated-svg-path"
        strokeDasharray="250"
        strokeDashoffset="1000"
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          display: { xs: 'none', md: 'block' },
        }}
      >
        {[path1Ref].map((ref, index) => (
          <path
            key={index}
            ref={ref}
            opacity="0.5"
            fill="none"
            strokeWidth="12.6"
          />
        ))}
      </Box>
      <Box
        ref={box1Ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 360,
          width: 360,
          flexGrow: 0,
          borderRadius: '50%',
          bgcolor: 'rgba(0,0,0,0.2)',
        }}
      >
        <IllustrationTechs />
      </Box>
      <Box
        ref={box2Ref}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          width: { xs: '100%', md: 'auto' },
          mt: { xs: 8, md: 0 },
        }}
      >
        <IllustrationSKDeploy />
      </Box>
    </Box>
  )
}
