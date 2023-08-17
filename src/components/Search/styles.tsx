import styled, { css } from 'styled-components'

type ContainerProps = {
  $hasValue: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  opacity: 0.5;
  border: none;
  border-radius: 0.25rem;
  margin-right: 2rem;

  &:focus-within {
    border-bottom: 2px solid var(--primary);
    opacity: 1;
  }

  ${({ $hasValue }) =>
    $hasValue &&
    css`
      border-bottom: 2px solid var(--primary);
      opacity: 1;
    `}
`

type InputProps = {
  value: string
}

export const Input = styled.input<InputProps>`
  color: var(--black);
  background-color: transparent;
  font-size: 1.8rem;
  padding: 0.5rem;
  border: none;
  padding-right: 4rem;
  width: 0;
  transition: width 0.5s;

  &:focus {
    width: 25rem;
  }

  ${({ value }) =>
    value.length &&
    css`
      width: 25rem;
    `}
`

export const IconInput = styled.label`
  color: var(--black);
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 1.75rem;
  width: 1.75rem;

  &:hover {
    cursor: pointer;
  }
`

export const IconClean = styled.div`
  color: var(--black);
  position: absolute;
  top: 0rem;
  right: 0.5rem;
  height: 1.75rem;
  width: 1.75rem;

  &:hover {
    cursor: pointer;
  }
`
