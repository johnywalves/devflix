import React from 'react'

import { CategoriaProps, VideoProps } from 'interfaces'

import VideoCard from './components/VideoCard'
import Slider, { SliderItem } from './components/Slider'
import { CarrouselContainer, Title, ExtraLink } from './styles'

type CarrouselProps = {
  ignoreFirstVideo: boolean
  category: CategoriaProps
}

function Carrousel({ ignoreFirstVideo, category }: CarrouselProps) {
  const categoriaId = `categoria_${category.id || 0}`
  const categoryTitle = category.titulo
  const categoryColor = category.cor
  const categoryExtraLink = category.link_extra
  const videos = category.videos
  return (
    <CarrouselContainer id={categoriaId}>
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
        {videos &&
          videos.map((video: VideoProps, index: number) => {
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
