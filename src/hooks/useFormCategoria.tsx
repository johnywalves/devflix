import { useState } from 'react'

import { CategoriaProps } from 'interfaces'

const useForm = (
  valoresIniciais: CategoriaProps
): [
  CategoriaProps,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [values, setValues] = useState<CategoriaProps>(valoresIniciais)

  const setValue = (chave: string, valor: string) => {
    setValues({
      ...values,
      [chave]: valor
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.getAttribute('name') || '', event.target.value)
  }

  function clearForm() {
    setValues(valoresIniciais)
  }

  return [values, handleChange, clearForm]
}

export default useForm
