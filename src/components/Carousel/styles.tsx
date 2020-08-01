import styled from 'styled-components'

type TitleProps = {
  categoryColor: string
}

export const Header = styled.header`
  padding-left: 5%;
`

export const Title = styled.h3`
  color: var(--black);
  position: relative;
  font-style: normal;
  font-weight: 700;
  font-size: 4.5rem;
  margin: 1rem 0 0 0;
  display: inline-block;
  padding: 20px 20px 20px 3rem;
  line-height: 1;
  border-radius: 4px;

  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 0;
    width: 1rem;
    height: calc(100% - 40px);
    background-color: ${({ categoryColor }: TitleProps) => categoryColor};
  }

  @media (max-width: 800px) {
    font-size: 2rem;

    &:before {
      height: 100%;
    }
  }
`

export const ExtraLink = styled.a`
  color: var(--black);
  transition: opacity 0.3s;
  font-size: 2rem;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 3rem;
  }
`

export const CarrouselContainer = styled.section`
  color: var(--white);
  overflow: hidden;
`
