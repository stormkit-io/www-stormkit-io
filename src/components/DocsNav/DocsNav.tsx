import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export interface NavigationItem {
  path: string
  title: string
  subtitle?: string
  category?: string
  description?: string
  date?: string
  active: boolean
  search?: boolean
  author?: {
    name: string
    img: string
    twitter: string
  }
}

interface Props {
  items?: NavigationItem[]
  currentCategory?: string
}

const categories = ['Welcome', 'Deployments', 'Features', 'Other', 'Api']

const isActiveCategory = (a: string, b: string) => {
  return a.toLowerCase() === b.toLowerCase()
}

export default function DocsNav({ items, currentCategory = 'welcome' }: Props) {
  const theme = useTheme()
  const [activeCategory, setActiveCategory] = useState(currentCategory)

  return (
    <Box
      sx={{
        bgcolor: 'page.container',
        py: 4,
        minWidth: 300,
        minHeight: '90vh',
      }}
    >
      {categories.map((category) => (
        <Box key={category}>
          <Typography
            variant="subtitle1"
            component="a"
            href=""
            onClick={(e) => {
              e.preventDefault()
              setActiveCategory(category)
            }}
            color="white"
            sx={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              borderColor: 'page.transparent',
              px: { xs: 2, md: 4 },
              py: 1,
              cursor: 'pointer',
              '&:hover': {
                bgcolor: 'page.transparent',
              },
            }}
          >
            {category}
            <ArrowDownIcon
              fontSize="small"
              sx={{
                transform: isActiveCategory(activeCategory, category)
                  ? 'rotate(180deg)'
                  : undefined,
              }}
            />
          </Typography>
          <Box
            sx={{
              mb: { xs: 0, md: 1 },
              lineHeight: 2.5,
              display: isActiveCategory(activeCategory, category)
                ? 'flex'
                : 'none',
              flexDirection: 'column',
            }}
          >
            {items
              ?.filter((item) => item.category === category)
              .map((item) => (
                <Link
                  key={item.path}
                  href={`/docs/${item.path}`}
                  color={
                    item.active
                      ? theme.palette.primary.contrastText
                      : 'text.secondary'
                  }
                  variant="subtitle2"
                  sx={{
                    display: 'block',
                    px: { xs: 2, md: 4 },
                    py: 1,
                    textDecoration: 'none',
                    fontWeight: item.active ? 600 : 400,
                    bgcolor: item.active ? 'page.transparent' : '',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'page.transparent',
                      color: 'white',
                    },
                  }}
                >
                  {item.title}
                </Link>
              ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
