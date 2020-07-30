import React from 'react'

import { Label } from './styles'

type FormFieldProps = {
  label: string
  type: string
  name: string
  value?: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => void
}

const FormField = ({ label, type, name, value, onChange }: FormFieldProps) => {
  return (
    <Label>
      <p>{label}</p>
      {type === 'textarea' ? (
        <textarea value={value} name={name} rows={4} onChange={onChange} />
      ) : (
        <input type={type} value={value} name={name} onChange={onChange} />
      )}
    </Label>
  )
}

export default FormField
