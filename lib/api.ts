import client from './sanity'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)

interface IProps {
  offset: number
  limit: number
  categoryName: string
}

const getClient = () => client

export function urlFor(source: string) {
  return builder.image(source)
}
export async function getAllPost() {
  const query = `*[_type=="post"]{
    _id,
    title,
    author->{
      name,
      image
    },
    category->{
      title,
    },
    description,
    mainImage,
    'slug':slug.current
  }`
  const results = await client.fetch(query)
  return results
}

export async function getPaginatedPost({
  offset,
  limit,
  categoryName,
}: IProps) {
  let query
  if (categoryName) {
    query = `*[_type=="post"&&category->title=="${categoryName}"]|order(publishedAt desc){
        _id,
        title,
        author->{
          name,
          image
        },
        category->{
          title,
        },
        description,
        mainImage,
        slug
      }[${offset}...${offset + limit}]`
  } else {
    query = `*[_type=="post"]|order(publishedAt desc){
        _id,
        title,
        author->{
          name,
          image
        },
        category->{
          title,
        },
        description,
        mainImage,
        slug
      }[${offset}...${offset + limit}]`
  }
  const results = await client.fetch(query)
  return results
}

export async function getPostBySlug(slug: string) {
  const currentClient = getClient()
  const query = `*[_type=="post"&&slug.current==$slug][0]{
    _id,
    _createdAt,
    title,
    author->{
      name,
      image
    },
    category->{
      title
    },
    'comments':*[
    _type=="comment"&&
    post._ref==^._id
    ],
    description,
    mainImage,
    slug,
    body
  }`
  const result = await currentClient.fetch(query, { slug })
  return result
}

export async function getAllPostsForSearch() {
  const query = `*[_type=="post"]|order(publishedAt desc){
        _id,
        title,
        author->{
          name,
          image
        },
        category->{
          title,
        },
        description,
        mainImage,
        slug
      }`

  const results = await client.fetch(query)
  return results
}
