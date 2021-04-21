import React from 'react'
import { TextArea, Form } from 'semantic-ui-react'

const TextAreaFormField = ({ input, meta, label }: any) => {
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
      control={TextArea}
      label={label}
      {...input}></Form.Field>
  )
}

export default TextAreaFormField
