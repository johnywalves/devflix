import { useState } from 'react'

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

const useForm = (
  valoresIniciais: CategoriaProps
): [
  CategoriaProps,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [values, setValues] = useState<CategoriaProps>({
    ...valoresIniciais,
    link_extra: { ...valoresIniciais.link_extra }
  })

  const setValue = (chave: string, valor: string) => {
    const object = { ...values }
    index(object, chave, valor)
    setValues({
      ...object
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.getAttribute('name') || '', event.target.value)
  }

  function clearForm() {
    setValues({
      ...valoresIniciais,
      link_extra: { ...valoresIniciais.link_extra }
    })
  }

  return [values, handleChange, clearForm]
}

export default useForm
