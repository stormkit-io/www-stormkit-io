import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { ChevronRight } from '@mui/icons-material'
import AnimationDeploymentPreview from './AnimationDeploymentPreview'
import AnimationStagedRollout from './AnimationStagedRollout'
import AnimationSnippetInjection from './AnimationSnippetInjection'
import AnimationFeatureFlag from './AnimationFeatureFlag'
import AnimationAPIRoutes from './AnimationAPIRoutes'

let i = 0
const texts = ['an Indiehacker?', 'a Small Startup?']

const features = [
  {
    title: 'Deployment previews',
    subtitle: 'Preview your deployments right from your pull/merge requests.',
  },
  {
    title: 'Staged rollouts',
    subtitle:
      'Release multiple deployments at the same time to a percentage of your users.',
  },
  {
    title: 'Snippet injections',
    subtitle:
      'Manage 3rd party scripts right from the UI. Useful for marketing teams or PMs.',
  },
  {
    title: 'Feature flags',
    subtitle: 'Toggle features with a simple click.',
  },
  {
    title: 'API Routes',
    subtitle:
      'Manage your Node.js serverless API from the same code repository.',
  },
]

let timeout: NodeJS.Timeout
const TIMEOUT_SWITCH_FEATURE = 7500

export default function FeaturePreview() {
  const [text, setText] = useState(texts[0])
  const [activeFeature, setActiveFeature] = useState(0)
  const [timeoutPaused, setTimeoutPaused] = useState(false)

  useEffect(() => {
    const int = setInterval(() => {
      setText(texts[++i % texts.length])
    }, 3500)

    return () => {
      clearInterval(int)
    }
  }, [])

  useEffect(() => {
    if (!timeoutPaused) {
      timeout = setTimeout(() => {
        setActiveFeature((activeFeature + 1) % features.length)
      }, TIMEOUT_SWITCH_FEATURE)
    }
  }, [activeFeature, timeoutPaused])

  return (
    <>
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: 24, md: 48 },
            textAlign: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          Explore some of our features!
        </Typography>
        <Typography
          variant="h3"
          sx={{
            mt: 1,
            fontSize: { xs: 16, md: 20 },
            textAlign: 'center',
            opacity: 0.7,
          }}
        >
          Couldn't find what you are looking for? Contact with us via Discord or E-mail.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          mt: 8,
        }}
      >
        <Box>
          {features.map((feature, index) => {
            const isActiveFeature = features[activeFeature] === feature

            return (
              <Box key={feature.title} sx={{ display: 'flex' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 'auto', md: 360 },
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                    boxShadow: isActiveFeature ? 12 : 0,
                    bgcolor: isActiveFeature ? 'rgba(0,0,0,0.25)' : undefined,
                    opacity: isActiveFeature ? 1 : 0.7,
                    transition: 'opacity 0.5s ease-in-out',
                    px: { xs: 2, md: 4 },
                    py: 4,
                  }}
                  onMouseEnter={() => {
                    clearTimeout(timeout)
                    setTimeoutPaused(true)
                  }}
                  onMouseLeave={() => {
                    if (timeoutPaused) {
                      setTimeoutPaused(false)
                    }
                  }}
                  onClick={() => {
                    clearTimeout(timeout)
                    setTimeoutPaused(true)
                    setActiveFeature(index)
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 20, cursor: 'pointer' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: 15,
                      opacity: isActiveFeature ? 0.7 : 0.4,
                      transition: 'opacity 0.5s ease-in-out',
                      mt: 1,
                    }}
                  >
                    {feature.subtitle}
                  </Typography>
                  <LinearProgress
                    color="secondary"
                    variant={timeoutPaused ? 'determinate' : 'indeterminate'}
                    value={timeoutPaused ? 100 : 0}
                    sx={{
                      opacity: 0.2,
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      visibility: isActiveFeature ? 'visible' : 'hidden',
                    }}
                  />
                </Box>
              </Box>
            )
          })}
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'rgba(0,0,0,0.25)',
            px: { xs: 2, md: 4 },
            py: 4,
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            boxShadow: 12,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            {activeFeature === 0 && <AnimationDeploymentPreview />}
            {activeFeature === 1 && <AnimationStagedRollout />}
            {activeFeature === 2 && <AnimationSnippetInjection />}
            {activeFeature === 3 && <AnimationFeatureFlag />}
            {activeFeature === 4 && <AnimationAPIRoutes />}
          </Box>
          <Box
            sx={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              pt: 2,
              mt: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Link
              href="/docs"
              sx={{
                color: 'white',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              See all of our features
            </Link>
            <ChevronRight />
          </Box>
        </Box>
      </Box>
    </>
  )
}
