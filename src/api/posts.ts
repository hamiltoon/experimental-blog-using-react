import axios from 'axios'
import { RemoteData, BlogPost, PostId } from '../types'

export async function getPosts(): Promise<RemoteData<Error, BlogPost[]>> {
  try {
    const response = await axios.get('https://retoolapi.dev/xQQK5j/posts??_sort=date&_order=asc')

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function getPost(postId: PostId): Promise<RemoteData<Error, BlogPost>> {
  try {
    const response = await axios.get(`https://retoolapi.dev/xQQK5j/posts/${postId}`)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function postPost(data: BlogPost): Promise<RemoteData<Error, BlogPost>> {
  try {
    const response = await axios.post(`https://retoolapi.dev/xQQK5j/posts`, data)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

export async function deletePost(postId: PostId): Promise<RemoteData<Error, {}>> {
  try {
    const response = await axios.delete(`https://retoolapi.dev/xQQK5j/posts/${postId}`)

    if (response.status > 299) throw await response

    return { type: 'SUCCESS', data: response.data }
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}
