import { CategoryProps } from 'interfaces'

import BannerFronthead from 'components/BannerFronthead'
import Carousel from 'components/Carousel'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import { MainHome } from 'components/Layout/styles'

import dadosInciais from 'data/dados_iniciais.json'

const Home = () => {
  return (
    <>
      <Menu />
      <MainHome>
        <BannerFronthead />
        {dadosInciais.categorias.map(
          (categoria: CategoryProps, index: number) => (
            <Carousel key={index} ignoreFirstVideo category={categoria} />
          )
        )}
      </MainHome>
      <Footer />
    </>
  )
}

export default Home
