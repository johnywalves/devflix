import React, { useEffect, useState } from 'react'
import { NextRouter, withRouter } from 'next/router'

import Layout from 'components/Layout'
import FormField from 'components/FormField'
import Loading from 'components/Loading'
import VideoCard from 'components/VideoCard'
import {
  Formulario,
  ButtonForm,
  BoxForm,
  Listagem,
  ContainerCenter
} from 'components/Formulario'

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

type SuggestionProps = {
  categoria: Array<string>
}

const CadastroVideo = ({ router }: CadastroVideoProps) => {
  const [loadingCategorias, setLoadingCategorias] = useState<boolean>(true)
  const [categorias, setCategorias] = useState<Array<CategoriaProps>>([])
  const [suggestions, setSuggestions] = useState<SuggestionProps>({
    categoria: []
  })

  const formVideo = useFormVideo(valoresIniciais, suggestions)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === formVideo.values.categoria
    })

    if (categoriaEscolhida) {
      videosRepository
        .create({
          titulo: formVideo.values.titulo,
          url: formVideo.values.url,
          categoriaId: categoriaEscolhida.id
        })
        .then(() => {
          router.push(`/?newvideo=${categoriaEscolhida.id}`)
        })
    }
  }

  useEffect(() => {
    setLoadingCategorias(true)
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer)
        setSuggestions({
          categoria: categoriasFromServer.map(
            ({ titulo }: CategoriaProps) => titulo || ''
          )
        })
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
              label="Url"
              type="text"
              name="url"
              value={formVideo.values.url}
              error={formVideo.errors.url}
              onBlur={formVideo.handleBlur}
              onChange={formVideo.handleChange}
            />
            <FormField
              label="Titulo do Vídeo"
              type="text"
              name="titulo"
              value={formVideo.values.titulo}
              error={formVideo.errors.titulo}
              onBlur={formVideo.handleBlur}
              onChange={formVideo.handleChange}
            />
            <FormField
              label="Categoria"
              type="text"
              name="categoria"
              value={formVideo.values.categoria}
              error={formVideo.errors.categoria}
              onBlur={formVideo.handleBlur}
              onChange={formVideo.handleChange}
              suggestions={suggestions.categoria}
            />
            <div>
              <ButtonForm disabled={!formVideo.submittable}>
                Cadastrar
              </ButtonForm>
            </div>
          </Formulario>

          <Listagem>
            <ContainerCenter>
              {formVideo.values.url && (
                <VideoCard
                  preview={true}
                  videoTitle={formVideo.values.titulo || ''}
                  videoURL={formVideo.values.url}
                />
              )}
            </ContainerCenter>
          </Listagem>
        </BoxForm>
      </Loading>
    </Layout>
  )
}

export default withRouter(CadastroVideo)
