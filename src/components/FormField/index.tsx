import React from 'react'

import { FormFieldWrapper, Label, LabelText, Input } from './styles'

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
  const isTextArea = type === 'textarea'
  const tag = isTextArea ? 'textarea' : 'input'
  return (
    <FormFieldWrapper>
      <Label>
        <Input as={tag} value={value} name={name} onChange={onChange} />
      </Label>
      <LabelText>{label}</LabelText>
    </FormFieldWrapper>
  )
}

export default FormField
