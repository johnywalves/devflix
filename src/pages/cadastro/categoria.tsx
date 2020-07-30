import React, { useState } from 'react'

import Layout from 'components/Layout'
import FormField from 'components/FormField'
import { Formulario, BoxForm, Listagem, Color } from 'components/FormCategoria'

type categoriaProps = {
  nome?: string
  descricao?: string
  cor: string
}

const valoresIniciais: categoriaProps = {
  nome: '',
  descricao: '',
  cor: ''
}

const CadastroCategoria = () => {
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

  return (
    <Layout>
      <h1>Cadastro Categoria</h1>
      <BoxForm>
        <Formulario onSubmit={handleSubmit}>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
          <div>
            <button>Cadastrar</button>
          </div>
        </Formulario>

        <Listagem>
          {categorias.map((categoria, indice) => (
            <li key={indice}>
              <Color cor={categoria.cor} />
              <span>{categoria.nome}</span> {categoria.descricao}
            </li>
          ))}
        </Listagem>
      </BoxForm>
    </Layout>
  )
}

export default CadastroCategoria
