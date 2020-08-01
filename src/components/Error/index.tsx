import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Illustration = styled.svg`
  margin: 0 auto;
  height: min(50vh, 50rem);
  width: auto;

  @media (max-width: 800px) {
    height: 30vh;
    width: auto;
  }
`

export const Description = styled.p`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 20%;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`
