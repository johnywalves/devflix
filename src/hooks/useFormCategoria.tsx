import { useEffect, useState } from 'react'

import { CategoriaProps } from 'interfaces'

const index = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any,
  is: Array<string> | string,
  value: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  if (typeof is == 'string') return index(obj, is.split('.'), value)
  else if (is.length == 1 && value !== undefined) return (obj[is[0]] = value)
  else if (is.length == 0) return obj
  else return index(obj[is[0]], is.slice(1), value)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validade = (values: CategoriaProps, touched: any): any => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors: any = {}

  if (touched.titulo) {
    if (!values.titulo || values.titulo.length === 0) {
      errors.titulo = 'Por favor informe o título da categoria'
    }
  }

  if (touched['link_extra.url']) {
    if (
      values.link_extra.text.length === 0 &&
      values.link_extra.url.length > 0
    ) {
      errors['link_extra.url'] = 'Url do link extra informado sem texto'
    }
  }

  return errors
}

type FormProps = {
  values: CategoriaProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any
  submittable: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  clearForm: () => void
}

const useFormCategoria = (valoresIniciais: CategoriaProps): FormProps => {
  const [values, setValues] = useState<CategoriaProps>({
    ...valoresIniciais,
    link_extra: { ...valoresIniciais.link_extra }
  })
  const [submittable, setSubmittable] = useState(false)
  const [errors, setErros] = useState({})
  const [touched, setTouched] = useState({})

  const setValue = (chave: string, valor: string) => {
    const object = { ...values }
    index(object, chave, valor)
    setValues({
      ...object
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
    setValues({
      ...valoresIniciais,
      link_extra: { ...valoresIniciais.link_extra }
    })
    setErros({})
    setTouched({})
  }

  return { values, errors, submittable, handleChange, handleBlur, clearForm }
}

export default useFormCategoria
