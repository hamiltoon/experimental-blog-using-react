import React from 'react'

import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container, Divider, Grid } from 'semantic-ui-react'
import CreateBlogPostPage from './pages/CreateBlogPostPage'
import ListBlogPostPage from './pages/ListBlogPostPage'
import ListBlogPostsPage from './pages/ListBlogPostsPage'
import Navigation from './sections/Navigation'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container text>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Navigation></Navigation>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Switch>
                <Route exact path="/" component={ListBlogPostsPage} />
                <Route path="/create-post" component={CreateBlogPostPage} />
                <Route path="/post/:id" component={ListBlogPostPage} />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </BrowserRouter>
  )
}

export default App
