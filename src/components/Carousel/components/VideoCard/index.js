import React from 'react'
import { VideoCardContainer } from './styles'

const getYouTubeId = (youtubeURL) => {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7'
  )
}

const VideoCard = ({ videoTitle, videoURL }) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      title={videoTitle}
    />
  )
}

export default VideoCard
