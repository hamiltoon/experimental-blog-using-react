import React from 'react'
import { Input, Form, FormFieldProps } from 'semantic-ui-react'

const InputFormField = ({ input, meta, label }: FormFieldProps) => {
  return (
    <Form.Field
      error={
        meta.submitFailed && meta.error
          ? {
              content: meta.error,
              pointing: 'below',
            }
          : undefined
      }
      control={Input}
      label={label}
      {...input}></Form.Field>
  )
}
export default InputFormField
