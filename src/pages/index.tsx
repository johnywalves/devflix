import { CategoryProps } from 'interfaces'

import BannerMain from 'components/BannerMain'
import Carousel from 'components/Carousel'
import Layout from 'components/Layout'

import dadosInciais from 'data/dados_iniciais.json'

const Home = () => {
  return (
    <Layout
      banner={
        <BannerMain
          videoTitle={dadosInciais.categorias[0].videos[0].titulo}
          url={dadosInciais.categorias[0].videos[0].url}
          videoDescription={
            'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
          }
        />
      }
    >
      {dadosInciais.categorias.map(
        (categoria: CategoryProps, index: number) => (
          <Carousel key={index} ignoreFirstVideo category={categoria} />
        )
      )}
    </Layout>
  )
}

export default Home
