import Menu from 'components/Menu'
import BannerMain from 'components/BannerMain'
import Carousel from 'components/Carousel'
import Footer from 'components/Footer'

import dadosInciais from 'data/dados_iniciais.json'

export default function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosInciais.categorias[0].videos[0].titulo}
        url={dadosInciais.categorias[0].videos[0].url}
        videoDescription={
          'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
        }
      />

      {dadosInciais.categorias.map((categoria, index) => (
        <Carousel key={index} ignoreFirstVideo category={categoria} />
      ))}

      <Footer />
    </div>
  )
}
