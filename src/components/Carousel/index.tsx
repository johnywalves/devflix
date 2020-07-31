import React from 'react'

import { CategoryProps, VideosProps } from 'interfaces'

import { CarrouselContainer, Title, ExtraLink } from './styles'
import VideoCard from './components/VideoCard'
import Slider, { SliderItem } from './components/Slider'

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
    <CarrouselContainer>
      {categoryTitle && (
        <>
          <Title categoryColor={categoryColor}>{categoryTitle}</Title>
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
