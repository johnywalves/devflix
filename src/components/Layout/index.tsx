import { ReactNode } from 'react'

import Footer from 'components/Footer'
import Menu from 'components/Menu'
import useQueryVideos from 'hooks/useQueryVideos'

import ResultSearch from './components/ResultSearch'
import { Main } from './styles'

type LayoutProps = {
  children: ReactNode
  suppressPadding?: boolean
}

const Layout = ({ children, suppressPadding }: LayoutProps) => {
  const [loading, result, videos] = useQueryVideos()

  return (
    <>
      <Menu result={result} />
      <Main $suppressPadding={suppressPadding}>{children}</Main>
      <ResultSearch result={result} loading={loading} videos={videos} />
      <Footer />
    </>
  )
}

export default Layout
