import { useState, useEffect } from 'react'

import { CategoriaProps } from 'interfaces'

import Loading from 'components/Loading'
import BannerFronthead from 'components/BannerFronthead'
import Carousel from 'components/Carousel'
import Layout from 'components/Layout'

import categoriasRepository from 'repositories/categorias'

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [dadosIniciais, setDadosIniciais] = useState<Array<CategoriaProps>>([])

  useEffect(() => {
    setLoading(true)
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  return (
    <Layout suppressPadding={true}>
      <BannerFronthead />
      <Loading loading={loading}>
        {dadosIniciais.map((categoria: CategoriaProps, index: number) => (
          <Carousel key={index} ignoreFirstVideo category={categoria} />
        ))}
      </Loading>
    </Layout>
  )
}

export default Home
