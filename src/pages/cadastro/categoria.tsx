import React, { useEffect, useState } from 'react'

import Layout from 'components/Layout'
import FormField from 'components/FormField'
import Loading from 'components/Loading'
import {
  Formulario,
  BoxForm,
  Listagem,
  ListagemItem,
  Color
} from 'components/Formulario'

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

  const [values, handleChange, clearForm] = useFormCategoria(valoresIniciais)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaving(false)

    categoriasRepository
      .create({
        ...values
      })
      .then(() => {
        setSaving(false)
        setCategorias([...categorias, values])
        clearForm()
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
          {console.log('values', valoresIniciais, values)}

          <Formulario onSubmit={handleSubmit}>
            <FormField
              label="Titulo da Categoria"
              type="text"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
            />
            <FormField
              label="Link Extra (Título)"
              type="text"
              name="link_extra.text"
              value={values.link_extra.text}
              onChange={handleChange}
            />
            <FormField
              label="Link Extra (Url)"
              type="text"
              name="link_extra.url"
              value={values.link_extra.url}
              onChange={handleChange}
            />
            <FormField
              label="Selecione a cor"
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
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
                <Color cor={categoria.cor} />
                <span>{categoria.titulo}</span>{' '}
                {categoria.link_extra ? categoria.link_extra.text : ''}
              </ListagemItem>
            ))}
          </Listagem>
        </Loading>
      </BoxForm>
    </Layout>
  )
}

export default CadastroCategoria
