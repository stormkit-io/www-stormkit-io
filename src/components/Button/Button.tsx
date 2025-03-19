import Button, { ButtonProps } from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

interface ButtonEnhancedProps extends ButtonProps {
  loading?: boolean
}

export default function ButtonEnhanced({
  loading,
  ...rest
}: ButtonEnhancedProps) {
  console.log('loading', loading)
  return (
    <Button {...rest}>
      {loading ? (
        <CircularProgress size="1.25rem" sx={{ color: 'white' }} />
      ) : (
        rest.children
      )}
    </Button>
  )
}
