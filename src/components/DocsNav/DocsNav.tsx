import { useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export interface NavigationItem {
  path: string
  text: string
  category?: string
  description?: string
  date?: string
  active: boolean
}

interface Props {
  items?: NavigationItem[]
}

export default function DocsNav({ items }: Props) {
  const theme = useTheme()
  const categories = useMemo(() => {
    return ['Welcome', 'Deployments', 'Features']
  }, [])

  return (
    <Box
      sx={{
        bgcolor: 'rgba(0,0,0,0.25)',
        py: 4,
        minWidth: 300,
      }}
    >
      {categories.map((category) => (
        <Box key={category}>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'white',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: 12.5,
              px: { xs: 2, md: 4 },
              mb: 1,
            }}
          >
            {category}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mb: { xs: 0, md: 4 },
              lineHeight: 2.5,
            }}
          >
            {items
              ?.filter((item) => item.category === category)
              .map((item) => (
                <Link
                  key={item.path}
                  href={`/docs/${item.path}`}
                  color={theme.palette.primary.contrastText}
                  sx={{
                    display: 'block',
                    px: { xs: 2, md: 4 },
                    py: 0.5,
                    textDecoration: 'none',
                    fontWeight: item.active ? 600 : 400,
                    opacity: item.active ? 1 : 0.75,
                    bgcolor: item.active ? 'rgba(0,0,0,0.5)' : '',
                    '&:hover': {
                      textDecoration: 'underline',
                      bgcolor: 'rgba(0,0,0,0.25)',
                    },
                  }}
                >
                  {item.text}
                </Link>
              ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
