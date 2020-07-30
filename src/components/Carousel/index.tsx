import React from 'react'

import { CategoryProps, VideosProps } from 'interfaces'

import { CarrouselContainer, Title, ExtraLink } from './styles'
import VideoCard from './components/VideoCard'
import Slider, { SliderItem } from './components/Slider'

const getFontColor = (background: string) => {
  const color: string =
    background.charAt(0) === '#' ? background.substring(1, 7) : background
  const red: number = parseInt(color.substring(0, 2), 16)
  const green: number = parseInt(color.substring(2, 4), 16)
  const blue: number = parseInt(color.substring(4, 6), 16)

  if (red * 0.299 + green * 0.587 + blue * 0.114 > 186) {
    return '#030303'
  } else {
    return '#ffffff'
  }
}

type CarrouselProps = {
  ignoreFirstVideo: boolean
  category: CategoryProps
}

function Carrousel({ ignoreFirstVideo, category }: CarrouselProps) {
  const categoryTitle = category.titulo
  const categoryColor = category.cor
  const categoryExtraLink = category.link_extra
  const videos = category.videos
  return (
    <CarrouselContainer
      style={{
        backgroundColor: categoryColor || 'red',
        color: getFontColor(categoryColor) || 'white'
      }}
    >
      {categoryTitle && (
        <>
          <Title>{categoryTitle}</Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video: VideosProps, index: number) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard videoTitle={video.titulo} videoURL={video.url} />
            </SliderItem>
          )
        })}
      </Slider>
    </CarrouselContainer>
  )
}

export default Carrousel
