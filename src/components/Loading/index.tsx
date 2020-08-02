import { ReactNode } from 'react'
import { LoadingBox, LoadingSpin } from './styles'

type LoadingProps = {
  loading: boolean
  children: ReactNode
  center?: boolean
}

const Loading = ({ loading, children, center }: LoadingProps) => (
  <>
    {loading ? (
      <LoadingBox center={center}>
        <LoadingSpin />
      </LoadingBox>
    ) : (
      <>{children}</>
    )}
  </>
)

export default Loading
