import { useState, useEffect } from 'react'

import IconClose from 'icons/IconClose'
import IconSearch from 'icons/IconSearch'

import { Container, Input, IconInput, IconClean } from './styles'

const Search = () => {
  const [textSearch, setTextSearch] = useState<string>('')

  const handleClose = () => {
    setTextSearch('')
    if (window.__clearSearchText) {
      window.__clearSearchText()
    }
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    setTextSearch(text)

    if (text === '') {
      handleClose()
    } else if (window.__setSearchText) {
      window.__setSearchText(text)
    }
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape' && window.__clearSearchText) {
        handleClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const hasValue = textSearch !== ''

  return (
    <Container hasValue={hasValue}>
      <Input
        type="text"
        id="search"
        placeholder="Título do Vídeo"
        value={textSearch}
        onChange={handleSearch}
      />
      {hasValue ? (
        <IconClean onClick={handleClose}>
          <IconClose />
        </IconClean>
      ) : (
        <IconInput htmlFor="search">
          <IconSearch />
        </IconInput>
      )}
    </Container>
  )
}

export default Search
