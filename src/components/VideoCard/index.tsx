import React from 'react'

import { VideoCardContainer } from './styles'

const getYouTubeId = (youtubeURL: string) => {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7'
  )
}

type VideoCardProps = {
  videoTitle: string
  videoURL: string
  highlight?: boolean
  preview?: boolean
}

const VideoCard = ({
  videoTitle,
  videoURL,
  highlight,
  preview
}: VideoCardProps) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`

  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      preview={preview}
      title={videoTitle}
      className={highlight ? 'highlight' : ''}
    />
  )
}

export default VideoCard
