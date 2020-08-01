import React from 'react'

import { FormFieldWrapper, Label, LabelText, Input, ColorWheel } from './styles'

type FormFieldProps = {
  label: string
  type: string
  name: string
  value?: string
  suggestions?: Array<string>
  onChange: (
    event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => void
}

const FormField = ({
  label,
  type,
  name,
  value,
  onChange,
  suggestions
}: FormFieldProps) => {
  const fieldId = `id_${name}`
  const isTextArea = type === 'textarea'
  const isColor = type === 'color'
  const tag = isTextArea ? 'textarea' : 'input'

  const hasValue = Boolean(value && value.length)
  const hasSuggestions = Boolean(suggestions && suggestions.length)

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          value={value}
          type={type}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        {isColor && <ColorWheel />}
        <LabelText>{label}</LabelText>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions &&
              suggestions.map((suggestion) => (
                <option
                  value={suggestion}
                  key={`suggestionFor_${fieldId}_option${suggestion}`}
                >
                  {suggestion}
                </option>
              ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  )
}

export default FormField
