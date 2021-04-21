import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import BlogPostContainer from '../containers/BlogPostContainer'
import DisplayBlogPost from '../sections/DisplayBlogPost'

const ListBlogPostPage = () => {
  return (
    <Container>
      <Header>Post</Header>
      <Segment>
        <BlogPostContainer
          render={({ postData }) => {
            return <DisplayBlogPost postData={postData}></DisplayBlogPost>
          }}
        />
      </Segment>
    </Container>
  )
}

export default ListBlogPostPage
