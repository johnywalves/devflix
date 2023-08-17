import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import BannerFronthead from 'components/BannerFronthead'
import Carousel from 'components/Carousel'
import Layout from 'components/Layout'
import Loading from 'components/Loading'
import { CategoriaProps } from 'interfaces'
import categoriasRepository from 'repositories/categorias'

const Home = () => {
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(true)
  const [highlight, setHighlight] = useState<number>(-1)
  const [categorias, setCategorias] = useState<Array<CategoriaProps>>([])

  useEffect(() => {
    setLoading(true)
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setCategorias(categoriasComVideos)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (!loading && router.query.newvideo) {
      setHighlight(Number(router.query.newvideo))
      setTimeout(() => {
        const element = document.getElementById(
          `categoria_${router.query.newvideo}`
        )
        const navigation = document.querySelector('nav')

        if (element && navigation) {
          window.scrollTo({
            top: element.offsetTop - navigation.clientHeight,
            behavior: 'smooth'
          })
        }
        setTimeout(() => setHighlight(-1), 500)
      }, 500)
    }
  }, [loading, router.query.newvideo])

  return (
    <Layout suppressPadding={true}>
      <BannerFronthead />
      <Loading loading={loading}>
        {categorias
          .filter(
            (categoria: CategoriaProps) =>
              categoria.titulo && categoria.videos && categoria.videos.length
          )
          .map((categoria: CategoriaProps, index: number) => (
            <Carousel
              key={index}
              category={categoria}
              highlight={categoria.id === highlight}
            />
          ))}
      </Loading>
    </Layout>
  )
}

export default Home
