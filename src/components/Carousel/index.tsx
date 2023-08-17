import React from 'react'

import VideoCard from 'components/VideoCard'
import { CategoriaProps, VideoProps } from 'interfaces'

import Slider, { SliderItem } from './components/Slider'
import { CarrouselContainer, Header, Title, ExtraLink } from './styles'

type CarrouselProps = {
  ignoreFirstVideo?: boolean
  category: CategoriaProps
  highlight: boolean
}

function Carrousel({ ignoreFirstVideo, highlight, category }: CarrouselProps) {
  const categoriaId = `categoria_${category.id || 0}`
  const categoryTitle = category.titulo
  const categoryColor = category.cor
  const categoryExtraLink = category.link_extra
  const videos = (category.videos || []).map((v) => v).reverse()

  return (
    <CarrouselContainer id={categoriaId}>
      {categoryTitle && (
        <Header>
          <Title $categoryColor={categoryColor}>{categoryTitle}</Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </Header>
      )}
      <Slider>
        {videos &&
          videos.map((video: VideoProps, index: number) => {
            if (ignoreFirstVideo && index === 0) {
              return null
            }

            return (
              <SliderItem key={video.titulo}>
                <VideoCard
                  videoTitle={video.titulo}
                  videoURL={video.url}
                  highlight={highlight && index === 0}
                />
              </SliderItem>
            )
          })}
      </Slider>
    </CarrouselContainer>
  )
}

export default Carrousel
