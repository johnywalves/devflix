import React, { useEffect, useState } from 'react'

import Layout from 'components/Layout'
import FormField from 'components/FormField'
import Loading from 'components/Loading'
import {
  Formulario,
  BoxForm,
  Listagem,
  ListagemItem,
  ListagemLinha,
  ListagemComandos,
  Color,
  ButtonRemove
} from 'components/Formulario'

import IconTrash from 'icons/IconTrash'
import categoriasRepository from 'repositories/categorias'
import useFormCategoria from 'hooks/useFormCategoria'
import { CategoriaProps } from 'interfaces'

const valoresIniciais: CategoriaProps = {
  id: 0,
  titulo: '',
  cor: '#000000',
  link_extra: {
    text: '',
    url: ''
  }
}

const CadastroCategoria = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [saving, setSaving] = useState<boolean>(false)
  const [categorias, setCategorias] = useState<Array<CategoriaProps>>([])

  const formCategoria = useFormCategoria(valoresIniciais)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaving(false)

    categoriasRepository
      .create({
        ...formCategoria.values
      })
      .then(() => {
        setSaving(false)
        setCategorias([...categorias, formCategoria.values])
        formCategoria.clearForm()
      })
      .catch(() => {
        setSaving(false)
      })
  }

  const removeCategoria = (categoriaId: number) => {
    categoriasRepository
      .remove(categoriaId)
      .then(() => {
        setCategorias(
          categorias
            .filter((categoria) => categoria.id !== categoriaId)
            .map((c) => c)
        )
        formCategoria.clearForm()
        setSaving(false)
      })
      .catch(() => {
        setSaving(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      <h1>Cadastro de Categoria</h1>
      <BoxForm>
        <Loading loading={saving}>
          <Formulario onSubmit={handleSubmit}>
            <FormField
              label="Titulo da Categoria"
              type="text"
              name="titulo"
              value={formCategoria.values.titulo}
              error={formCategoria.errors.titulo}
              onBlur={formCategoria.handleBlur}
              onChange={formCategoria.handleChange}
            />
            <FormField
              label="Link Extra (Título)"
              type="text"
              name="link_extra.text"
              value={formCategoria.values.link_extra.text}
              error={formCategoria.errors['link_extra.text']}
              onBlur={formCategoria.handleBlur}
              onChange={formCategoria.handleChange}
            />
            <FormField
              label="Link Extra (Url)"
              type="text"
              name="link_extra.url"
              value={formCategoria.values.link_extra.url}
              error={formCategoria.errors['link_extra.url']}
              onBlur={formCategoria.handleBlur}
              onChange={formCategoria.handleChange}
            />
            <FormField
              label="Selecione a cor"
              type="color"
              name="cor"
              value={formCategoria.values.cor}
              onBlur={formCategoria.handleBlur}
              onChange={formCategoria.handleChange}
            />
            <div>
              <button>Cadastrar</button>
            </div>
          </Formulario>
        </Loading>

        <Loading loading={loading}>
          <Listagem>
            {categorias.map((categoria, indice) => (
              <ListagemItem key={indice}>
                <ListagemLinha>
                  <Color cor={categoria.cor} />
                  <span>{categoria.titulo}</span>{' '}
                  {categoria.link_extra ? categoria.link_extra.text : ''}
                </ListagemLinha>
                <ListagemComandos>
                  <ButtonRemove
                    onClick={() => removeCategoria(categoria.id || 0)}
                  >
                    <IconTrash />
                  </ButtonRemove>
                </ListagemComandos>
              </ListagemItem>
            ))}
          </Listagem>
        </Loading>
      </BoxForm>
    </Layout>
  )
}

export default CadastroCategoria
