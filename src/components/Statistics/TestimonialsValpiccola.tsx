import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Link from '@mui/material/Link'
import Chip from '@mui/material/Chip'
import Icon from '~/components/Icon'
import Card from '~/components/Card'
import CardHeader from '~/components/CardHeader'

export default function TestimonialsValpiccola() {
  return (
    <Card>
      <CardHeader>
        <Typography
          sx={{
            fontSize: 24,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            alt="Valpiccola"
            src="https://www.valpiccola.com/logo-small.png"
            sx={{ mr: 2, height: 32 }}
          />

          <Link
            href="https://www.valpiccola.com/"
            target="_blank"
            rel="noreferrer noopener"
            sx={{ color: 'white' }}
          >
            Valpiccola
          </Link>
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Chip label="SME" color="secondary" size="small" sx={{ mr: 1 }} />
          <Chip label="Tourism" color="secondary" size="small" sx={{ mr: 1 }} />
          <Chip label="SaaS" color="success" size="small" />
        </Box>
      </CardHeader>
      <Box>
        <Typography sx={{ mb: 2 }}>
          As a boutique tour guide service showcasing Italy's hidden treasures,
          Valpiccola utilizes Stormkit to host their SQLite-powered tour
          platform, delivering a seamless visitor experience while maintaining a
          lightweight technical footprint.
        </Typography>
        <List>
          {[
            'Implemented status checks ensuring only successful deployments go live',
            'Simplified infrastructure with all services running on a single compact server',
          ].map((i) => (
            <ListItem key={i}>
              <ListItemIcon>
                <Icon name="Check" color="success" sx={{ mr: 0 }} />
              </ListItemIcon>
              <ListItemText>{i}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  )
}
