import { ReactNode } from 'react'
import { LoadingBox, LoadingSpin } from './styles'

type LoadingProps = {
  loading: boolean
  children: ReactNode
}

const Loading = ({ loading, children }: LoadingProps) => (
  <>
    {loading ? (
      <LoadingBox>
        <LoadingSpin />
      </LoadingBox>
    ) : (
      <>{children}</>
    )}
  </>
)

export default Loading
