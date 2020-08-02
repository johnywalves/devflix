import { CategoriaProps } from 'interfaces'
import config from 'config'

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`

const create = (objetoDaCategoria: CategoriaProps) => {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(objetoDaCategoria)
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json()
      return resposta
    }

    throw new Error('Não foi possível cadastrar os dados :(')
  })
}

const getAll = () => {
  return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json()
      return resposta
    }

    throw new Error('Não foi possível pegar os dados :(')
  })
}

const getAllWithVideos = () => {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(
    async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json()
        return resposta
      }

      throw new Error('Não foi possível pegar os dados :(')
    }
  )
}

export default {
  create,
  getAllWithVideos,
  getAll
}
