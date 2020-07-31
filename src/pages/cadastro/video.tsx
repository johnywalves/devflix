import Link from 'next/link'

import Layout from 'components/Layout'

const CadastroVideo = () => {
  return (
    <Layout>
      <h1>Cadastro Vídeo</h1>
      <Link href="/cadastro/categoria">
        <h5 style={{ fontSize: '5rem', color: 'var(--primary)' }}>
          Cadastrar Categoria
        </h5>
      </Link>
    </Layout>
  )
}

export default CadastroVideo
