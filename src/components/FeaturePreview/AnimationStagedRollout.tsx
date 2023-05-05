import { useEffect, useRef, useState } from 'react'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Http as HttpIcon } from '@mui/icons-material'
import DrawContainer from '~/components/DrawContainer'
import Browser from '~/components/Browser'
import { drawConnector } from '~/helpers/draw'

export default function AnimationStagedRollout() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const pathRef1 = useRef<SVGPathElement>(null)
  const pathRef2 = useRef<SVGPathElement>(null)
  const boxRef1 = useRef<HTMLElement>(null)
  const boxRef2 = useRef<HTMLElement>(null)
  const boxRef3 = useRef<HTMLElement>(null)

  useEffect(() => {
    setTimeout(() => {
      setValue1(30)
      setValue2(70)
    }, 500)
  }, [])

  useEffect(() => {
    if (
      !pathRef1.current ||
      !pathRef2.current ||
      !boxRef1.current ||
      !boxRef2.current ||
      !boxRef3.current
    ) {
      return
    }

    drawConnector(pathRef1.current, boxRef1.current, boxRef2.current, {
      from: 'right-middle',
      to: 'left-middle',
      distortX: 100,
    })

    drawConnector(pathRef2.current, boxRef1.current, boxRef3.current, {
      from: 'right-middle',
      to: 'left-middle',
      distortX: 100,
    })
  }, [pathRef1, pathRef2, boxRef1, boxRef2, boxRef3])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          pb: 1,
          borderRadius: 1,
        }}
      >
        <Typography id="slider-1" gutterBottom>
          Deployment 1
        </Typography>
        <Slider
          id="slider-1"
          color="secondary"
          value={value1}
          min={0}
          max={100}
          sx={{ mb: 2 }}
        />

        <Typography id="slider-2" gutterBottom>
          Deployment 2
        </Typography>
        <Slider
          id="slider-2"
          color="secondary"
          value={value2}
          min={0}
          max={100}
        />
      </Box>

      <Box
        sx={{
          mt: 12,
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          animation: 'fadeIn 2s ease-in-out forwards',
          animationDelay: '1s',
          opacity: 0,
        }}
      >
        <DrawContainer
          strokeWidth={5}
          pathRef={[pathRef1, pathRef2]}
          stroke="rgba(255,255,255,0.25)"
        />
        <Box
          ref={boxRef1}
          sx={{
            pr: 4,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <HttpIcon sx={{ fontSize: 50 }} />
        </Box>
        <Box sx={{ flexGrow: 0.5 }}>
          <Box ref={boxRef2} sx={{ mb: 8 }}>
            <Browser minHeight={0} url={'deployment-1.stormkit.dev'}>
              Deployment 1
            </Browser>
          </Box>
          <Box ref={boxRef3}>
            <Browser minHeight={0} url={'deployment-2.stormkit.dev'}>
              Deployment 2
            </Browser>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
