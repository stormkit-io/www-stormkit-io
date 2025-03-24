import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Icon from '~/components/Icon'
import MenuIconDesktop from './MenuIconDesktop'
import LinksDesktop from './LinksDesktop'

export default function Header() {
  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          lg: 'block',
        },
        bgcolor: 'page.container',
        boxShadow: 2,
        px: { xs: 1, md: 0 },
      }}
    >
      <Box
        sx={{
          m: 'auto',
          py: 2,
          px: { xs: 1, md: 4 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <MenuIconDesktop />
        <Box
          sx={{
            flex: 1,
            fontSize: 12.5,
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'transparent',
            zIndex: 1,
          }}
        >
          <LinksDesktop />
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <Button
              variant="outlined"
              color="info"
              href="https://github.com/stormkit-io"
              rel="noreferrer noopener"
              target="_blank"
              sx={{
                display: { xs: 'none', lg: 'inline-flex' },
                mr: 2,
              }}
            >
              <Icon name="GitHub" sx={{ mr: 1 }} />
              <Box
                component="span"
                sx={{ display: { xs: 'none', xl: 'inline' } }}
              >
                GitHub
              </Box>
              <Icon
                name="ArrowForward"
                sx={{
                  ml: { xs: 0, xl: 1 },
                  transform: 'rotate(-45deg)',
                  fontSize: 16,
                  display: { xs: 'none', xl: 'inline-block' },
                }}
              />
            </Button>
            <Button
              variant="outlined"
              color="info"
              href="/contact"
              sx={{ mr: 2 }}
            >
              Contact us
            </Button>
            <Button
              variant="outlined"
              color="info"
              href="https://app.stormkit.io"
            >
              Login
              <Icon
                name="ArrowForward"
                sx={{ ml: 1, fontSize: 16, transform: 'rotate(-45deg)' }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
