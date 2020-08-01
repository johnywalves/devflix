export type LinkExtraProps = {
  text: string
  url: string
}

export type VideoProps = {
  titulo: string
  url: string
  categoriaId?: number
  categoria?: string
}

export type CategoriaProps = {
  id?: number
  titulo?: string
  descricao?: string
  cor: string
  link_extra?: LinkExtraProps
  videos?: Array<VideoProps>
}
