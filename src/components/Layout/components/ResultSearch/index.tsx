import Loading from 'components/Loading'
import VideoCard from 'components/VideoCard'
import { VideoProps } from 'interfaces'

import { Container, Listagem, NotFound } from './styles'

type ResultSearchProps = {
  result: boolean
  loading: boolean
  videos: Array<VideoProps>
}

const ResultSearch = ({ result, loading, videos }: ResultSearchProps) => (
  <Container showContainer={result}>
    {result && (
      <Loading loading={loading} center={true}>
        <Listagem>
          {videos.length === 0 ? (
            <NotFound>Nenhum conhecimento encontrado</NotFound>
          ) : (
            <>
              {videos.map((video: VideoProps, index: number) => (
                <VideoCard
                  key={index}
                  videoTitle={video.titulo}
                  videoURL={video.url}
                  preview={true}
                />
              ))}
            </>
          )}
        </Listagem>
      </Loading>
    )}
  </Container>
)

export default ResultSearch
