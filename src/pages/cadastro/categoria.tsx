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
  titulo: '',
  descricao: '',
  cor: '#000000'
}

const CadastroCategoria = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [categorias, setCategorias] = useState<Array<CategoriaProps>>([])

  const [values, handleChange, clearForm] = useFormCategoria(valoresIniciais)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setCategorias([...categorias, values])
    clearForm()
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
        <Formulario onSubmit={handleSubmit}>
          <FormField
            label="Titulo da Categoria"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />
          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
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

        <Loading loading={loading}>
          <Listagem>
            {categorias.map((categoria, indice) => (
              <ListagemItem key={indice}>
                <Color cor={categoria.cor} />
                <span>{categoria.titulo}</span> {categoria.descricao}
              </ListagemItem>
            ))}
          </Listagem>
        </Loading>
      </BoxForm>
    </Layout>
  )
}

export default CadastroCategoria
