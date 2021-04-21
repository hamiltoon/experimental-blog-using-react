import React from 'react'
import { List, Loader } from 'semantic-ui-react'
import { BlogPost, RemoteData } from '../types'
import { NavLink } from 'react-router-dom'

type Props = {
  postsData: RemoteData<Error, BlogPost[]>
}

const ListPosts = ({ postsData }: Props) => {
  switch (postsData.type) {
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
        <List divided relaxed>
          {postsData.data.map((post) => (
            <List.Item key={post.id}>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header exact to={`post/${post.id}`} as={NavLink}>
                  {post.header}
                </List.Header>
                <List.Description exact to={`post/${post.id}`} as={NavLink}>
                  {post.date}
                </List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      )
    case 'FAILURE':
      return <p>Failed load the posts</p>
  }
}
export default ListPosts
