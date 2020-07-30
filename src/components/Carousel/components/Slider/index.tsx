import { ReactNode } from 'react'
import SlickSlider from 'react-slick'
import styled from 'styled-components'

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 5%;
    height: 5%;
    transform: initial;

    &:hover {
      background-color: #00000088;
    }
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0px;
    height: 100%;
  }
  .slick-next {
    right: 0px;
    height: 100%;
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
