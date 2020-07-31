import React, { useEffect, useState } from 'react'

import Layout from 'components/Layout'
import FormField from 'components/FormField'
import {
  Formulario,
  BoxForm,
  Listagem,
  Color,
  LoadingBox,
  Loading
} from 'components/FormCategoria'

type categoriaProps = {
  titulo?: string
  descricao?: string
  cor: string
}

const valoresIniciais: categoriaProps = {
  titulo: '',
  descricao: '',
  cor: ''
}

const CadastroCategoria = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [categorias, setCategorias] = useState<Array<categoriaProps>>([])
  const [values, setValues] = useState<categoriaProps>(valoresIniciais)

  const setValue = (chave: string, valor: string) => {
    setValues({
      ...values,
      [chave]: valor
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.getAttribute('name') || '', event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setCategorias([...categorias, values])
    setValues(valoresIniciais)
  }

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8008/categorias'
      : 'https://devflixjohnywalves.herokuapp.com/categorias'

    setLoading(true)
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setCategorias([...resp])
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      <h1>Cadastro de Categoria</h1>
      <BoxForm>
        <Formulario onSubmit={handleSubmit}>
          <FormField
            label="Nome da Categoria"
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
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
          <div>
            <button>Cadastrar</button>
          </div>
        </Formulario>

        <Listagem>
          {loading ? (
            <LoadingBox>
              <Loading />
            </LoadingBox>
          ) : (
            categorias.map((categoria, indice) => (
              <li key={indice}>
                <Color cor={categoria.cor} />
                <span>{categoria.titulo}</span> {categoria.descricao}
              </li>
            ))
          )}
        </Listagem>
      </BoxForm>
    </Layout>
  )
}

export default CadastroCategoria
