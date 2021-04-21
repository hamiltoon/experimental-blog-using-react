import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import ListPosts from '../sections/ListPosts'
import BlogPostsContainer from '../containers/BlogPostsContainer'

const ListBlogPostsPage = () => {
  return (
    <Container>
      <Header>Posts</Header>
      <Segment>
        <BlogPostsContainer
          render={({ postsData }) => {
            return <ListPosts postsData={postsData}></ListPosts>
          }}
        />
      </Segment>
    </Container>
  )
}

export default ListBlogPostsPage
