import React from 'react'

import { CategoryProps, VideosProps } from 'interfaces'

import {
  VideoCardGroupContainer,
  VideoCardList,
  Title,
  ExtraLink
} from './styles'
import VideoCard from './components/VideoCard'

type VideoCardGroupProps = {
  ignoreFirstVideo: boolean
  category: CategoryProps
}

function VideoCardGroup({ ignoreFirstVideo, category }: VideoCardGroupProps) {
  const categoryTitle = category.titulo
  const categoryColor = category.cor
  const categoryExtraLink = category.link_extra
  const videos = category.videos
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <VideoCardList>
        {videos.map((video: VideosProps, index: number) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          )
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  )
}

export default VideoCardGroup
