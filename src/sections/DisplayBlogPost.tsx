import React from 'react'
import { useHistory } from 'react-router'
import { Button, Card, Container, Header, Loader } from 'semantic-ui-react'
import { deletePost } from '../api/posts'
import { BlogPost, RemoteData } from '../types'

type Props = {
  postData: RemoteData<Error, BlogPost>
}

const ListPosts = ({ postData }: Props) => {
  let history = useHistory()

  switch (postData.type) {
    case 'NOT_ASKED':
      return <p>Not asked</p>
    case 'LOADING':
      return (
        <Loader active inline="centered">
          Loading
        </Loader>
      )
    case 'SUCCESS':
      return (
        <>
          <Container text>
            <Card>
              <Card.Description>{postData.data.email}</Card.Description>
              <Card.Meta>{postData.data.date}</Card.Meta>
              <Card.Header>{postData.data.author}</Card.Header>
            </Card>
            <Header as="h2">{postData.data.header}</Header>
            <p>{postData.data.body}</p>
            <Button
              primary
              onClick={() => deletePost(postData.data.id).then(() => history.push('/'))}>
              Delete
            </Button>
          </Container>
        </>
      )

    case 'FAILURE':
      return <p>Failed load the post</p>
  }
}
export default ListPosts
