import { TypeAnimation } from 'react-type-animation'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import StormkitConnection from '~/components/StormkitConnection'
import Browser from '~/components/Browser'

export default function AnimationDeploymentPreview() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Browser icon="code">
        <TypeAnimation
          sequence={[
            [
              '$ git push\n',
              'Counting objects: 2, done',
              'Upload my-organisation/my-repo.git',
              '+ 42788b4...a3ee24d main -> main',
            ].join('\n'),
          ]}
          wrapper="span"
          speed={90}
          cursor={false}
          style={{
            marginTop: 0,
            whiteSpace: 'pre-line',
            fontWeight: 600,
          }}
        />
      </Browser>
      <Box
        sx={{
          animation: 'fadeIn 1s linear forwards',
          animationDelay: '1.5s',
          opacity: 0,
        }}
      >
        <StormkitConnection height={100} />
      </Box>
      <Box
        sx={{
          animation: 'fadeIn 1s linear forwards',
          animationDelay: '2s',
          opacity: 0,
        }}
      >
        <Browser minHeight={0} icon="browser">
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
            Deployment complete
          </Typography>
          <Typography variant="subtitle2">
            Your commit has been built successfully on Stormkit. Click the link
            to preview it.
            <br />
            <Link
              href="https://monorepo.stormkit.dev"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'white' }}
            >
              https://monorepo--858191948.stormkit.dev
            </Link>
          </Typography>
        </Browser>
      </Box>
    </Box>
  )
}
