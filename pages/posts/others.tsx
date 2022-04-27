import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { GetStaticProps } from 'next'

import { urlFor } from '../../sanity'
import Link from 'next/link'
import { Post } from '../../typings'

import OthersHero from '../../components/OthersHero'
import { getAllPostsForSearch, getPaginatedPost } from '../../lib/api'
import { useGetPostsPage } from '../../actions/pagination'

interface Props {
  posts: [Post]
  allPosts: [Post]
}

const others = ({ posts, allPosts }: Props) => {
  const { data, size, setSize, isEnd } = useGetPostsPage({
    posts,
    limit: 3,
    categoryName: 'Others',
  })
  return (
    <div>
      <Header posts={allPosts} />
      <OthersHero />
      <div className="mx-auto mt-10 flex w-11/12 max-w-7xl flex-col ">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Others</h2>
        </div>
        <hr className="my-5 mx-auto w-full border border-gray-300" />
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
          {data?.map((page) =>
            page.map((post: Post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="group cursor-pointer overflow-hidden ">
                  <img
                    className="h-60 w-full rounded object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                    src={urlFor(post.mainImage).url()!}
                  />
                  <div className="flex justify-between bg-white py-3">
                    <div>
                      <p className="text-sm text-gray-500">
                        {post.category.title}
                      </p>
                      <p className="text-lg font-bold">{post.title}</p>
                      <p className="text-xs">{post.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        {isEnd ? null : (
          <button
            onClick={() => setSize(size + 1)}
            className="mx-auto rounded border border-black bg-white py-2 px-5 hover:bg-black hover:text-white"
          >
            Load More
          </button>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default others

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPaginatedPost({
    offset: 0,
    limit: 3,
    categoryName: 'Others',
  })

  const allPosts = await getAllPostsForSearch()

  return {
    props: {
      posts,
      allPosts,
    },
  }
}
