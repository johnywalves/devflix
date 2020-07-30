import { ReactNode } from 'react'
import SlickSlider from 'react-slick'
import styled from 'styled-components'

const Container = styled.ul`
  padding: 0;
  margin: 0;

  .slick-list {
    padding-left: 5%;
    overflow: visible;
  }

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 5%;
    height: 5%;
    transform: initial;
    opacity: 0.75;
    transition: all 0.3s;

    &:hover {
      opacity: 1;
      transform: scale(1.25);
    }

    &.slick-disabled {
      opacity: 0.2;
    }

    &:before,
    &:after {
      position: absolute;
      left: 50%;
      top: 50%;
      content: '';
      background-color: var(--white);
      display: block;
      height: 3rem;
      width: 0.5rem;
      opacity: 1;
      border-radius: 0.25rem;
    }

    &.slick-disabled:before,
    &.slick-disabled:after {
      opacity: 1;
    }
  }

  .slick-prev {
    left: 0px;
    height: 100%;

    &:before {
      transform: translate(-50%, -80%) rotate(45deg);
    }
    &:after {
      transform: translate(-50%, -20%) rotate(-45deg);
    }
  }
  .slick-next {
    right: 0px;
    height: 100%;

    &:before {
      transform: translate(-50%, -80%) rotate(-45deg);
    }
    &:after {
      transform: translate(-50%, -20%) rotate(45deg);
    }
  }
`

export const SliderItem = styled.li`
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`

type SliderProps = {
  children: ReactNode
}

const Slider = ({ children }: SliderProps) => (
  <Container>
    <SlickSlider
      {...{
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true
      }}
    >
      {children}
    </SlickSlider>
  </Container>
)

export default Slider
