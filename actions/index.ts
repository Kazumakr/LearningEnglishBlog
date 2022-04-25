import useSWR from 'swr'
const fetcher = (url: string) => fetch(url).then((res) => res.json())
export const useGetPosts = (offset: number) => {
  return useSWR(`/api/posts?offset=${offset || 0}`, fetcher)
}

export const getPosts = (url: string) => fetcher(url)
