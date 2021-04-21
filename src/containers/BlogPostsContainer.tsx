import { useEffect, useState } from 'react'
import { getPosts } from '../api/posts'
import { BlogPost, RemoteData } from '../types'

type Props = {
  render: (props: { postsData: RemoteData<Error, BlogPost[]> }) => React.ReactElement
}
const BlogPostsContainer = (props: Props) => {
  const [postsData, setPosts] = useState<RemoteData<Error, BlogPost[]>>({
    type: 'NOT_ASKED',
  })

  useEffect(() => {
    if (postsData.type === 'NOT_ASKED') {
      setPosts({ type: 'LOADING' })
      getPosts().then(setPosts)
    }
  }, [postsData.type])

  return props.render({ postsData })
}

export default BlogPostsContainer
