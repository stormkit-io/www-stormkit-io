import { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import CMDKey from '@mui/icons-material/KeyboardCommandKey'
import DocSearchModal from './DocSearchModal'

let registered = false

export default function DocSearch() {
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    if (registered) {
      return
    }

    registered = true

    document.addEventListener('keydown', function (e) {
      // Check if CMD (Mac) or CTRL (Windows) key is pressed
      const isCmdOrCtrlPressed = e.metaKey || e.ctrlKey
      const isKKeyPressed = e.key === 'k'

      if (isCmdOrCtrlPressed && isKKeyPressed) {
        setFocused(true)
      }
    })
  }, [])

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
      }}
    >
      <Box>
        <TextField
          placeholder="Search docs"
          autoComplete="off"
          variant="outlined"
          size="small"
          onClick={() => setFocused(true)}
          sx={{
            userSelect: 'none',
            width: '200',
          }}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mx: 1, fontSize: 14 }} />,
            endAdornment: (
              <Chip
                size="small"
                label={
                  <Box
                    component="span"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <CMDKey sx={{ fontSize: 12 }} /> + K
                  </Box>
                }
              />
            ),
            sx: {
              fontSize: 14,
            },
          }}
        />
      </Box>
      {focused && (
        <DocSearchModal
          onClose={() => {
            setFocused(false)
          }}
        />
      )}
    </Box>
  )
}
