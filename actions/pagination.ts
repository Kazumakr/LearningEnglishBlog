import useSWRInfinite from 'swr/infinite'
import { getPosts } from '../actions'
import { Post } from '../typings'

interface Props {
  limit: number
  posts: [Post]
  categoryName: string
}
export const useGetPostsPage = ({ limit = 3, posts, categoryName }: Props) => {
  const results = useSWRInfinite(
    (index, previousPageData) => {
      if (index === 0) {
        return `/api/posts?limit=${limit}&categoryName=${categoryName}`
      }
      if (!previousPageData.length) {
        return null
      }
      return `/api/posts?offset=${
        index * limit
      }&limit=${limit}&categoryName=${categoryName}`
    },
    getPosts,
    { persistSize: true }
  )
  let isEnd = false
  const { data } = results
  if (data) {
    isEnd = data[data.length - 1].length < limit
  }
  return { ...results, isEnd }
}
