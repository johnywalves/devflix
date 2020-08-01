import styled from 'styled-components'

export const Container = styled.section`
  min-height: 50rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 5%;
  background-color: var(--background) !important;

  @media (max-width: 1200px) {
    position: relative;
    padding-bottom: 10rem;
  }
`

export const Explain = styled.div`
  width: 50%;
  padding-top: 5rem;
  z-index: 2;

  span {
    color: var(--primary);
  }

  a {
    color: var(--primary);
    text-decoration: none;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }
`

export const Logo = styled.img`
  width: 23rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  color: var(--black);
  font-size: 4rem;
  margin-bottom: 1rem;
`

export const Description = styled.p`
  color: var(--blackLighter);
  font-size: 2rem;
  padding-right: 5rem;
`

export const Draw = styled.svg`
  padding: 0 5rem;

  @media (max-width: 1200px) {
    position: absolute;
    right: 0;
    bottom: 0;
    height: max(8rem, 75%);
    width: auto;
    opacity: 0.15;
    padding-bottom: 5rem;
  }
`
