import { useCallback, useEffect, useState, useRef } from 'react'

import { VideoProps } from 'interfaces'
import videosRepository from 'repositories/videos'

const useQueryVideos = (): [boolean, boolean, Array<VideoProps>] => {
  const timerRef = useRef<number | null>(null)

  const [loading, setLoading] = useState<boolean>(false)
  const [result, setResult] = useState<boolean>(false)
  const [videos, setVideos] = useState<Array<VideoProps>>([])

  const setSearchText = useCallback((text: string) => {
    timerRef.current && clearTimeout(timerRef.current)
    setResult(true)
    setLoading(true)

    timerRef.current = setTimeout(() => {
      videosRepository
        .getSearchVideos(text)
        .then((videos) => {
          setVideos(videos)
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    }, 500)
  }, [])

  const clearSearchText = useCallback(() => {
    timerRef.current && clearTimeout(timerRef.current)
    setLoading(false)
    setResult(false)
  }, [])

  useEffect(() => {
    window.__setSearchText = setSearchText
    window.__clearSearchText = clearSearchText
  }, [clearSearchText, setSearchText])

  return [loading, result, videos]
}

export default useQueryVideos
