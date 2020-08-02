import { ReactNode } from 'react'
import { LoadingBox, LoadingSpin } from './styles'

type LoadingProps = {
  loading: boolean
  children: ReactNode
}

const Loading = ({ loading, children }: LoadingProps) => (
  <>
    {loading ? (
      <LoadingBox center={true}>
        <LoadingSpin />
      </LoadingBox>
    ) : (
      <>{children}</>
    )}
  </>
)

export default Loading
