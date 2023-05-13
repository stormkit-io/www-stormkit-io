import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Link from '@mui/material/Link'
import StormkitLogoText from '~/assets/logos/stormkit-logo-text-h--white.svg'

interface Props {
  maxWidth?: string
}

let lastWidth: string = 'lg'

const links = [
  { path: '/docs', text: 'docs' },
  { path: '/blog', text: 'blog' },
]

export default function Header({ maxWidth = lastWidth }: Props) {
  const theme = useTheme()
  lastWidth = maxWidth

  return (
    <Box
      sx={{
        bgcolor: 'rgba(0,0,0,0.25)',
        boxShadow: 2,
        px: { xs: 1, md: 0 },
      }}
    >
      <Box
        maxWidth={maxWidth}
        sx={{
          m: 'auto',
          py: 2,
          px: maxWidth === 'none' ? { xs: 1, md: 4 } : 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" sx={{ display: 'block', width: 130 }}>
          <img src={StormkitLogoText} alt="Stormkit Logo" width="100%" />
        </Link>
        <Box
          sx={{ textTransform: 'uppercase', fontSize: 12.5, fontWeight: 600 }}
        >
          {links.map((link) => (
            <Link
              key={link.path}
              color={theme.palette.primary.contrastText}
              sx={{
                ml: 2,
                textDecoration: 'none',
                opacity: 0.7,
                transition: 'opacity 0.25s ease-in-out',
                ':hover': { opacity: 1 },
              }}
              href={link.path}
            >
              {link.text}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
