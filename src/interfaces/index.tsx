export type VideoProps = {
  titulo: string
  url: string
  categoriaId?: number
  categoria?: string
}

export type LinkExtraProps = {
  text: string
  url: string
}

export type CategoriaProps = {
  id?: number
  titulo?: string
  cor: string
  link_extra: LinkExtraProps
  videos?: Array<VideoProps>
}
