import styled from 'styled-components'

export const LoadingBox = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingSpin = styled.div`
  border: 2rem solid var(--backgroundInput);
  border-left-color: var(--primary);
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  animation: spin 1s linear infinite;
`
