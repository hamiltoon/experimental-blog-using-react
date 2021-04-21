import React from 'react'
import { Header, Container, Segment } from 'semantic-ui-react'

import CreateBlogPostForm from '../sections/CreateBlogPostForm'

const CreateBlogPost = () => {
  return (
    <Container>
      <Header>Create post</Header>
      <Segment>
        <CreateBlogPostForm></CreateBlogPostForm>
      </Segment>
    </Container>
  )
}

export default CreateBlogPost
