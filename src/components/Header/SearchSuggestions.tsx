import React, { useEffect, useState } from 'react'
import Autosuggest from 'react-autosuggest'
import SearchIcon from '@mui/icons-material/Search'

const SearchComponent = ({ miniSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)

  const getSuggestions = (value) => {
    const results = miniSearch.search(value)
    return results.map((result) => result.title)
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const onSuggestionSelected = (event, { suggestion }) => {
    // Handle selection (e.g., navigate to the selected result)
    console.log('Selected:', suggestion)
  }

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>

  const inputProps = {
    placeholder: 'Search...',
    value: searchTerm,
    onChange: (event, { newValue }) => setSearchTerm(newValue),
    onFocus: () => setIsExpanded(true),
    onBlur: () => setIsExpanded(false),
  }

  return (
    <div>
      <SearchIcon onClick={() => setIsExpanded(!isExpanded)} />
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  )
}

export default SearchComponent
