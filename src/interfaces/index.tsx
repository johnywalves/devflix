export type VideosProps = {
  titulo: string
  url: string
}

export type LinkExtraProps = {
  text: string
  url: string
}

export type CategoryProps = {
  titulo: string
  link?: string
  cor: string
  link_extra: LinkExtraProps
  videos: Array<VideosProps>
}
