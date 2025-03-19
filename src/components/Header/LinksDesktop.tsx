import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Icon from '~/components/Icon'
import links from './links'

interface Props {
  setIsMenuOpen: (v: boolean) => void
}

export default function LinksDesktop({ setIsMenuOpen }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        ml: 3,
        width: { xs: '100%', md: 'auto' },
        height: { xs: '100%', md: 'auto' },
      }}
    >
      {links.map((link) => (
        <Button
          key={link.path}
          color="info"
          variant="text"
          onClick={() => {
            setIsMenuOpen(false)
          }}
          sx={{
            mr: 2,
          }}
          href={link.children ? undefined : link.path}
        >
          <Typography component="span" sx={{ fontSize: 14 }}>
            {link.text}
          </Typography>
          {link.children && (
            <Icon name="ChevronRight" sx={{ transform: 'rotate(90deg)' }} />
          )}
        </Button>
      ))}
    </Box>
  )
}
