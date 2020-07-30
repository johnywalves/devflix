import styled from 'styled-components'

export const Label = styled.label`
  font-size: 3rem;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 1rem;
  }

  input,
  textarea {
    appearance: none;
    background-color: var(--backgroundInput);
    font-size: 3rem;
    color: var(--white);
    border: none;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }

  input[type='text'],
  textarea {
    border-bottom: 2px var(--white) solid;
  }

  input {
    height: 5rem;
  }
`
