import { useEffect, useState } from 'react'
import { NextRouter, withRouter } from 'next/router'
import Link from 'next/link'

import Button from 'components/Button'

import { Nav, Logo, Commands, Astro } from './styles'

type MenuProps = {
  router: NextRouter
}

const Menu = ({ router }: MenuProps) => {
  const [theme, setTheme] = useState('')

  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const handleTheme = () =>
    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')

  return (
    <Nav>
      <Link href="/">
        <Logo className="Logo" src={'/img/logo.png'} />
      </Link>
      <Commands>
        {router.route === '/' && (
          <Link href="/cadastro/video">
            <Button as="a">Novo Vídeo</Button>
          </Link>
        )}
        <Astro onClick={handleTheme} />
      </Commands>
    </Nav>
  )
}

export default withRouter(Menu)
