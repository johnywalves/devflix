import React, { useEffect, useState } from 'react'
import { NextRouter, withRouter } from 'next/router'

import Layout from 'components/Layout'
import FormField from 'components/FormField'
import Loading from 'components/Loading'
import { Formulario, BoxForm } from 'components/Formulario'

import categoriasRepository from 'repositories/categorias'
import videosRepository from 'repositories/videos'
import useFormVideo from 'hooks/useFormVideo'
import { CategoriaProps, VideoProps } from 'interfaces'

const valoresIniciais: VideoProps = {
  titulo: '',
  url: ''
}

type CadastroVideoProps = {
  router: NextRouter
}

const CadastroVideo = ({ router }: CadastroVideoProps) => {
  const [loadingCategorias, setLoadingCategorias] = useState<boolean>(true)
  const [categorias, setCategorias] = useState<Array<CategoriaProps>>([])

  const categoryTitles: Array<string> = categorias.map(
    ({ titulo }) => titulo || ''
  )

  const [values, handleChange] = useFormVideo(valoresIniciais)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === values.categoria
    })

    videosRepository
      .create({
        titulo: values.titulo,
        url: values.url,
        categoriaId: categoriaEscolhida ? categoriaEscolhida.id : 1
      })
      .then(() => {
        router.push(
          `/?newvideo=${categoriaEscolhida ? categoriaEscolhida.id : 1}`
        )
      })
  }

  useEffect(() => {
    setLoadingCategorias(true)
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer)
        setLoadingCategorias(false)
      })
      .catch(() => {
        setLoadingCategorias(false)
      })
  }, [])

  return (
    <Layout>
      <h1>Cadastro de Vídeo</h1>
      <Loading loading={loadingCategorias}>
        <BoxForm>
          <Formulario onSubmit={handleSubmit}>
            <FormField
              label="Titulo do Vídeo"
              type="text"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
            />
            <FormField
              label="Url"
              type="text"
              name="url"
              value={values.url}
              onChange={handleChange}
            />
            <FormField
              label="Categoria"
              type="text"
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
              suggestions={categoryTitles}
            />
            <div>
              <button>Cadastrar</button>
            </div>
          </Formulario>
        </BoxForm>
      </Loading>
    </Layout>
  )
}

export default withRouter(CadastroVideo)
