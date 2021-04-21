import React from 'react'
import { Button, Form as SForm } from 'semantic-ui-react'
import { Form, Field } from 'react-final-form'
import { useHistory } from 'react-router'
import { BlogPost } from '../types'

import {
  InputFormField,
  TextAreaFormField,
  validate,
  notEmpty,
  hasMaxLength,
  isEmailAddress,
} from '../form'
import { postPost } from '../api/posts'

const CreateBlogPostForm = () => {
  let history = useHistory()

  const onSubmit = ({ ...values }: BlogPost) => {
    return postPost(values).then((newPost) => {
      if (newPost.type === 'SUCCESS') history.push(`/post/${newPost.data.id}`)
    })
  }
  return (
    <Form
      onSubmit={onSubmit}
      subscription={{
        submitting: true,
        hasValidationErrors: true,
        pristine: true,
      }}
      validate={validate({
        header: [notEmpty(), hasMaxLength()(50)],
        preamble: [notEmpty(), hasMaxLength()(250)],
        body: [notEmpty()],
        author: [notEmpty()],
        email: [notEmpty(), isEmailAddress()],
        date: [notEmpty()],
      })}
      render={({ handleSubmit, form, submitting, pristine }) => {
        return (
          <SForm loading={submitting} onSubmit={handleSubmit}>
            <Field label="Header" name="header" component={InputFormField}></Field>
            <Field
              label="Preamble"
              type="text"
              name="preamble"
              component={TextAreaFormField}></Field>
            <Field label="Text" type="text" name="body" component={TextAreaFormField}></Field>
            <Field label="Author" type="text" name="author" component={InputFormField}></Field>
            <Field label="Email" type="email" name="email" component={InputFormField}></Field>
            <Field label="Date" type="date" name="date" component={InputFormField}></Field>
            <SForm.Group>
              <SForm.Field control={Button} type="submit">
                Create
              </SForm.Field>
              <Button type="button" onClick={() => form.reset} disabled={submitting || pristine}>
                Reset
              </Button>
            </SForm.Group>
          </SForm>
        )
      }}
    />
  )
}

export default CreateBlogPostForm
