import React from 'react'
import { Input, Form } from 'semantic-ui-react'

const InputFormField = ({ input, meta, label }: any) => {
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
