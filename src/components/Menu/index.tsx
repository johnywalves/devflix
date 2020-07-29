import Button from 'components/Button'
import Link from 'next/link'

import { Nav, Logo } from './styles'

const Menu = () => {
  return (
    <Nav>
      <Link href="/">
        <Logo className="Logo" src={'/img/logo.png'} />
      </Link>
      <Link href="/cadastro/video">
        <Button as="a">Novo Vídeo</Button>
      </Link>
    </Nav>
  )
}

export default Menu
