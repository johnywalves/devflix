import { NextRouter, withRouter } from 'next/router'
import Link from 'next/link'

import Button from 'components/Button'

import { Nav, Logo } from './styles'

type MenuProps = {
  router: NextRouter
}

const Menu = ({ router }: MenuProps) => {
  return (
    <Nav>
      <Link href="/">
        <Logo className="Logo" src={'/img/logo.png'} />
      </Link>
      {router.route === '/' && (
        <Link href="/cadastro/video">
          <Button as="a">Novo Vídeo</Button>
        </Link>
      )}
    </Nav>
  )
}

export default withRouter(Menu)
