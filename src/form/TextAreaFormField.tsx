import React from 'react'
import { TextArea, Form, FormTextAreaProps } from 'semantic-ui-react'

const TextAreaFormField = ({ input, meta, label }: FormTextAreaProps) => {
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
