import { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import Browser from '~/components/Browser'
import Tooltip from '~/components/Tooltip'
import ScrollableButtons from './ScrollableButtons'
import { features } from './features'

export default function Illustration() {
  const [activeButton, setActiveButton] = useState(0)
  const [isDark, setIsDark] = useState(false)
  const currentButton = useMemo(() => features[activeButton], [activeButton])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        margin: '0 auto',
        flexDirection: 'column',
        mx: { xs: 8, md: 0 },
      }}
    >
      <Box sx={{ display: 'flex', px: 4 }}>
        <ScrollableButtons
          buttons={features}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </Box>
      <Box
        sx={{
          display: { xs: 'block', xl: 'none' },
          backgroundColor: 'secondary.main',
          border: '1px solid black',
          borderRadius: 2,
          boxShadow: 20,
          p: 2,
          mb: 4,
          width: '100%',
        }}
      >
        <Typography>{currentButton.description}</Typography>
      </Box>
      <Box
        sx={{
          border: `1px solid ${grey[900]}`,
          borderRadius: 2,
          mt: 4,
          position: 'relative',
          boxShadow:
            '0 0 20px 5px rgba(72, 80, 201, 0.4), 0 0 40px 20px rgba(72, 80, 201, 0.2)',
        }}
      >
        <Browser
          url="app.stormkit.io"
          actionSlot={
            <FormControlLabel
              sx={{ pl: 0, ml: 2 }}
              label={
                <Typography
                  component="span"
                  fontSize={12}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Dark mode
                </Typography>
              }
              control={
                <Switch
                  sx={{ mr: 2 }}
                  name="autoPublish"
                  color="secondary"
                  checked={isDark}
                  onChange={() => setIsDark(!isDark)}
                />
              }
              labelPlacement="start"
            />
          }
        >
          <Box sx={{ p: 2 }}>
            {currentButton && (
              <Tooltip
                sx={{
                  top: currentButton.pos?.y,
                  left: currentButton.pos?.x,
                  maxWidth: currentButton?.maxWidth || 400,
                }}
                arrowLeftPos={currentButton?.arrow?.left}
                arrowTopPos={currentButton?.arrow?.top}
                mode={isDark ? 'dark' : 'light'}
              >
                <Typography>{currentButton.description}</Typography>
              </Tooltip>
            )}
            <picture>
              <Box
                component="source"
                media="(max-width: 800px)"
                srcSet={`${
                  currentButton[isDark ? 'image' : 'imageLight']
                }?size=800`}
              />
              <Box
                component="img"
                sx={{
                  width: '100%',
                  display: 'block',
                  m: 0,
                  p: 0,
                  borderRadius: 1,
                }}
                src={`${
                  currentButton[isDark ? 'image' : 'imageLight']
                }?size=1150`}
                alt="Deployments"
              />
            </picture>
            <Box
              sx={{
                position: 'absolute',
                left: -1000,
                top: -1000,
                visibility: 'hidden',
              }}
            >
              {/* Preload all images */}
              {features.map((f) => (
                <Box
                  key={f.id}
                  component="img"
                  sx={{ visibility: 'hidden', position: 'absolute' }}
                  src={`${f[isDark ? 'image' : 'imageLight']}?size=1280`}
                  alt="Deployments"
                />
              ))}
            </Box>
          </Box>
        </Browser>
      </Box>
    </Box>
  )
}
