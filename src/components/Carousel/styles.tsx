import styled from 'styled-components'

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 1;
  margin-left: 5%;
  display: inline-block;
  padding: 20px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity 0.3s;
  font-size: 2rem;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`

export const CarrouselContainer = styled.section`
  color: white;
  min-height: 197px;
  overflow: hidden;
`
