import { useState } from 'react'

import { VideoProps } from 'interfaces'

const useForm = (
  valoresIniciais: VideoProps
): [
  VideoProps,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [values, setValues] = useState<VideoProps>(valoresIniciais)

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
