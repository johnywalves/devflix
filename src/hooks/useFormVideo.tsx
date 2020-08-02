/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

import { VideoProps } from 'interfaces'

const validade = (values: VideoProps, touched: any, options: any): any => {
  const errors: any = {}

  if (touched.url) {
    if (!values.url || values.url.length === 0) {
      errors.url = 'Por favor informe o Url do Vídeo'
    }
  }

  if (touched.titulo) {
    if (!values.titulo || values.titulo.length === 0) {
      errors.titulo = 'Por favor informe o Titulo do Vídeo'
    }
  }

  if (touched.categoria) {
    if (!values.categoria || values.categoria.length === 0) {
      errors.categoria = 'Por favor informe a Categoria do Vídeo'
    } else if (!options.categoria.includes(values.categoria)) {
      errors.categoria = 'Por favor selecione uma das categorias na lista'
    }
  }

  return errors
}

type useFormProps = {
  values: VideoProps
  errors: any
  submittable: boolean
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  clearForm: () => void
}

const useForm = (valoresIniciais: VideoProps, options: any): useFormProps => {
  const [values, setValues] = useState<VideoProps>(valoresIniciais)
  const [submittable, setSubmittable] = useState(false)
  const [errors, setErros] = useState({})
  const [touched, setTouched] = useState({})

  const setValue = (chave: string, valor: string) => {
    setValues({
      ...values,
      [chave]: valor
    })
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const name: string = event.target.getAttribute('name') || ''
    setTouched({
      ...touched,
      [name]: true
    })
  }

  useEffect(() => {
    setErros(validade(values, touched, options))
  }, [values, touched, options])

  useEffect(() => {
    setSubmittable(
      Object.keys(errors).length === 0 && Object.keys(touched).length > 0
    )
  }, [errors, touched])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.getAttribute('name') || '', event.target.value)
  }

  function clearForm() {
    setSubmittable(false)
    setValues(valoresIniciais)
    setErros({})
    setTouched({})
  }

  return { values, errors, submittable, handleChange, handleBlur, clearForm }
}

export default useForm
