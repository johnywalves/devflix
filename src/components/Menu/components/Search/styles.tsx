import styled from 'styled-components'

import IconSearch from './IconSearch'

export const Container = styled.div`
  position: relative;
  opacity: 0.5;

  &:focus {
    border-bottom-color: var(--primary);
    opacity: 1;
  }
`

export const Input = styled.input`
  color: var(--black);
  background-color: transparent;
  font-size: 1.8rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  border-bottom: 2px solid var(--black);
  padding-right: 4rem;
`

export const IconSearchInput = styled(IconSearch)`
  color: var(--black);
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 1.75rem;
  width: 1.75rem;
`
