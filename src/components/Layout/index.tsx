import { ReactNode } from 'react'

import Menu from 'components/Menu'
import Footer from 'components/Footer'

import { Main } from './styles'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
