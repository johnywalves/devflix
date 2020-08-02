import config from 'config'

import { VideoProps } from 'interfaces'

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`

const create = (objetoDoVideo: VideoProps) => {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(objetoDoVideo)
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json()
      return resposta
    }

    throw new Error('Não foi possível cadastrar os dados :(')
  })
}

const getSearchVideos = (query: string) => {
  return fetch(`${URL_VIDEOS}?_expand=categoria&q=${query}`).then(
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
  getSearchVideos,
  create
}
