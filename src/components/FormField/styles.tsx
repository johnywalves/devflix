import styled, { css } from 'styled-components'

import IconColorWheel from './components/IconColorWheel'

export const FormFieldWrapper = styled.div`
  position: relative;

  textarea {
    min-height: 150px;
  }

  input[type='color'] {
    padding-left: 15rem;
    padding-right: 5rem;

    &:hover {
      cursor: pointer;
    }
  }
`

export const Label = styled.label``

export const LabelText = styled.span`
  color: var(--black);
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`

type InputProps = {
  type: string
  value?: string
  hasValue: boolean
  autoComplete: string
  list?: string
}

export const Input = styled.input<InputProps>`
  background: var(--backgroundInput);
  color: var(--black);
  display: block;
  width: 100%;
  min-height: 57px;
  font-size: 18px;

  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--black);

  padding: 16px 16px;
  margin-bottom: 2rem;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &[type='color'] {
    padding: 0 16px;
    background: transparent;
    border: none;
  }

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type='color']) + ${LabelText} {
    color: var(--primary);
    transform: scale(0.6) translateY(-10px);
  }

  ${({ value }: InputProps) => {
    const hasValue = value && value.length > 0
    return (
      hasValue &&
      css`
        &:not([type='color']) + ${LabelText} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    )
  }}
`

export const ColorWheel = styled(IconColorWheel)`
  position: absolute;
  top: 0.85rem;
  right: 0;
  height: 4rem;
  width: 4rem;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`
