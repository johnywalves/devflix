import Link from 'next/link'

import Layout from 'components/Layout'

const CadastroCategoria = () => {
  return (
    <Layout>
      <h1>Cadastro Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>Cadastrar</button>
      </form>

      <Link href="/">Ir para home</Link>
    </Layout>
  )
}

export default CadastroCategoria
