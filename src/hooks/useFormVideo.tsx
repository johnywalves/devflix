import { useEffect, useState } from 'react'

import { VideoProps } from 'interfaces'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validade = (values: VideoProps, touched: any): any => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors: any = {}

  if (touched.url) {
    if (!values.url || values.url.length === 0) {
      errors.url = 'Por favor informe o Url do vídeo'
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
    }
  }

  return errors
}

type useFormProps = {
  values: VideoProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  clearForm: () => void
}

const useForm = (valoresIniciais: VideoProps): useFormProps => {
  const [values, setValues] = useState<VideoProps>(valoresIniciais)
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
    setErros(validade(values, touched))
  }, [values, touched])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.getAttribute('name') || '', event.target.value)
  }

  function clearForm() {
    setValues(valoresIniciais)
  }

  return { values, errors, handleChange, handleBlur, clearForm }
}

export default useForm
