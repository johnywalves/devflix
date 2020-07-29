import { ReactNode } from 'react'

import Menu from 'components/Menu'
import Footer from 'components/Footer'

import { Main } from './styles'

type LayoutProps = {
  banner?: ReactNode
  children: ReactNode
}

const Layout = ({ banner, children }: LayoutProps) => {
  return (
    <>
      <Menu />
      {banner}
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
