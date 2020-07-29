import Button from 'components/Button'

import { Nav, Logo } from './styled'

const Menu = () => {
  return (
    <Nav>
      <a>
        <Logo className="Logo" src={'/img/logo.png'} />
      </a>
      <Button as="a">Novo Vídeo</Button>
    </Nav>
  )
}

export default Menu
