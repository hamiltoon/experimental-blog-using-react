export type RemoteData<E, D> =
  | { type: 'NOT_ASKED' }
  | { type: 'LOADING' }
  | { type: 'FAILURE'; error: E }
  | { type: 'SUCCESS'; data: D }

export type PostId = number

export type BlogPost = {
  id: PostId
  header: string
  author: string
  body: string
  date: string
  email: string
  preamble: string
}
