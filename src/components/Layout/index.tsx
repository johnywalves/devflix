import { ReactNode } from 'react'

import Menu from 'components/Menu'
import Footer from 'components/Footer'

import { Main } from './styles'

type LayoutProps = {
  children: ReactNode
  suppressPadding?: boolean
}

const Layout = ({ children, suppressPadding }: LayoutProps) => {
  return (
    <>
      <Menu />
      <Main suppressPadding={suppressPadding}>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
