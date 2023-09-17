import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import StormkitConnection from '~/components/StormkitConnection'
import Browser from '~/components/Browser'

export default function AnimationAPIRoutes() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEnabled(!enabled)
    }, 2500)

    return () => {
      clearTimeout(timeout)
    }
  }, [enabled])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box>
        <Box sx={{ flexGrow: 0.4, mb: 2 }}>
          <Browser icon="code" minHeight={0}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 1,
                borderRadius: 1,
                fontFamily: 'monospace',
                fontSize: 14,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  borderRight: '1px solid rgba(255,255,255,0.05)',
                  minHeight: 86,
                  pr: 2,
                }}
              >
                - api/
                <Box
                  sx={{
                    m: 0,
                    ml: 2,
                    my: 1,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    px: 1,
                  }}
                >
                  + users.post.js
                </Box>
              </Box>
              <Box sx={{ flex: 2, pl: 4, minHeight: 86 }}>
                <Box component="span" sx={{ display: 'inline-block' }}>
                  <Box component="span" sx={{ color: 'rgb(157 38 80)' }}>
                    export default
                  </Box>{' '}
                  <Box component="span" sx={{ color: 'rgb(14 69 218)' }}>
                    function
                  </Box>{' '}
                  (req, res) {'{'}
                </Box>
                <Box component="span" sx={{ display: 'inline-block', ml: 2 }}>
                  res.
                  <Box component="span" sx={{ color: 'rgb(197 218 14)' }}>
                    write
                  </Box>
                  (
                  <Box component="span" sx={{ opacity: 0.7 }}>
                    "Hello world"
                  </Box>
                  );
                </Box>
                <Box sx={{ ml: 2 }}>
                  res.
                  <Box component="span" sx={{ color: 'rgb(197 218 14)' }}>
                    end()
                  </Box>
                  ;
                </Box>
                <Box>{'}'}</Box>
              </Box>
            </Box>
          </Browser>
        </Box>
      </Box>
      <StormkitConnection height={100} />
      <Box>
        <Browser url="POST my-app.com/api/users" minHeight={0}>
          Hello world
        </Browser>
      </Box>
    </Box>
  )
}
