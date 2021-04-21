import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPost } from '../api/posts'
import { BlogPost, RemoteData } from '../types'

type Props = {
  render: (props: { postData: RemoteData<Error, BlogPost> }) => React.ReactElement
}

const BlogPostContainer = (props: Props) => {
  const [postData, setPost] = useState<RemoteData<Error, BlogPost>>({
    type: 'NOT_ASKED',
  })
  const params = useParams<{ id?: string }>()

  useEffect(() => {
    if (postData.type === 'NOT_ASKED' && params.id) {
      setPost({ type: 'LOADING' })
      getPost(parseInt(params.id)).then(setPost)
    }
  }, [postData.type, params.id])

  return props.render({ postData })
}

export default BlogPostContainer
