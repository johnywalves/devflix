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
  preview?: boolean
}

const VideoCard = ({ videoTitle, videoURL, preview }: VideoCardProps) => {
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
    />
  )
}

export default VideoCard
