// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Autosuggest from 'react-autosuggest'
import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/material'


const SearchComponent = ({ miniSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isExpanded, setIsExpanded] = useState(true)

  const getSuggestions = (value) => {
    const results = miniSearch.search(value)
    return results.map((result) => ({
      title: result.title,
      description: result.description,
      url: result.url,
    }))
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionSelected = (event, { suggestion }) => {
    window.open(suggestion.url, '_blank');
  }

  const renderSuggestion = (suggestion) => {
    return (
      <Box>
        <Box>{suggestion.title}</Box>
        <Box>{suggestion.description}</Box>
      </Box>
    )
  }

  const inputProps = {
    placeholder: 'Search...',
    value: searchTerm,
    onChange: (event, { newValue }) => setSearchTerm(newValue),
    onFocus: () => setIsExpanded(true),
    onBlur: () => setIsExpanded(false),
  }

  const theme = {
    container: {
      width: '100%',
    },
    suggestionsList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    suggestion: {
      backgroundColor: '#0F092B',
      padding: '10px',
      cursor: 'pointer',
    },
  }

  return (
    <Box sx={{
      display: "flex"
    }}>
      <SearchIcon onClick={() => setIsExpanded(!isExpanded)} />
      <Box sx={{display: isExpanded ? 'block' : 'none'}}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={() => setSuggestions([])}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={(suggestion) => suggestion.title}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          theme={theme}
        />
      </Box>
    </Box>
  )
}

export default SearchComponent
