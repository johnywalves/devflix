import styled from 'styled-components'

export const Main = styled.main`
  background-color: var(--background);
  color: var(--black);
  flex: 1;
  padding: 2rem 5% 0;

  h1 {
    font-size: 5rem;
    margin-bottom: 3rem;
  }

  button {
    border: none;
    border-radius: 0.5rem;
    font-size: 3rem;
    font-weight: 700;
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    background-color: var(--primary);
    color: #ffffff;

    &:hover {
      cursor: pointer;
    }
  }
`

export const MainHome = styled.main`
  background-color: var(--background);
  color: var(--white);
  flex: 1;
`
