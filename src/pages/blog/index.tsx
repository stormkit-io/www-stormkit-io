import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { ChevronRight } from '@mui/icons-material'
import Header from '~/components/Header'
import { withContent } from '~/helpers/markdown'
import { fetchData } from './_ssr'
import { dateFormat } from '~/helpers/date'

// Required for SSR
export { fetchData } from './_ssr'

export default function BlogContent() {
  const theme = useTheme()
  const { content, navigation } = withContent(fetchData)

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: theme.palette.background.default,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Header maxWidth="lg" />
      <Box
        maxWidth="lg"
        sx={{
          mx: 'auto',
          flexGrow: 1,
          width: '100%',
          pt: 4,
        }}
      >
        {navigation?.map((nav) => (
          <Box
            key={nav.path}
            sx={{
              p: { xs: 2, lg: 4 },
              mx: 'auto',
              mb: 4,
              bgcolor: 'rgba(0,0,0,0.25)',
            }}
            maxWidth="768px"
          >
            {nav.date && (
              <Typography sx={{ mb: 1, fontSize: 13 }}>
                {dateFormat(nav.date)}
              </Typography>
            )}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 1,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {nav.text}
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.7 }}>
              {nav.description}
            </Typography>
            <Box sx={{ textAlign: 'right', mt: 2 }}>
              <Link
                href={nav.path}
                color="secondary"
                sx={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  ':hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Read more <ChevronRight />
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
