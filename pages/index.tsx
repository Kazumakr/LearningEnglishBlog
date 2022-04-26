import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { GetStaticProps } from 'next'
import { urlFor } from '../sanity'
import { Post } from '../typings'
import Link from 'next/link'
import Footer from '../components/Footer'

import { getPaginatedPost, getAllPostsForSearch } from '../lib/api'

interface Props {
  posts: [Post]
  grammarPosts: [Post]
  idiomsPosts: [Post]
  vocabularyPosts: [Post]
  othersPosts: [Post]
  allPosts: [Post]
}

const Home = ({
  posts,
  grammarPosts,
  idiomsPosts,
  vocabularyPosts,
  othersPosts,
  allPosts,
}: Props) => {
  console.log('all', allPosts)
  return (
    <div className="">
      <Head>
        <title>ELB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header posts={allPosts} />
      <Hero />
      <div className="mx-auto mt-10 max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Most Recent Posts</h2>
          <Link href="/posts">
            <p className="cursor-pointer opacity-70 hover:opacity-100">
              View More
            </p>
          </Link>
        </div>
        <hr className="my-5 mx-auto w-full border border-gray-300" />

        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-3 ">
          <Link key={posts[0]._id} href={`/post/${posts[0].slug.current}`}>
            <div className="group col-span-2 cursor-pointer overflow-hidden">
              <img
                className="h-80 w-full rounded object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(posts[0].mainImage).url()!}
              />
              <div className="flex justify-between bg-white py-3">
                <div>
                  <p className="text-sm">{posts[0].category.title}</p>
                  <p className="text-lg font-bold">{posts[0].title}</p>
                  <p className="text-xs">{posts[0].description}</p>
                </div>
              </div>
            </div>
          </Link>

          <div className="col-span-1 flex flex-col">
            {posts.map((post, index) => {
              if (index >= 1) {
                return (
                  <Link key={post._id} href={`/post/${post.slug.current}`}>
                    <div className="group  cursor-pointer overflow-hidden">
                      <img
                        className="h-40 w-full rounded object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                        src={urlFor(post.mainImage).url()!}
                      />
                      <div className="flex justify-between bg-white py-3">
                        <div>
                          <p className="text-sm">{post.category.title}</p>
                          <p className="text-lg font-bold">{post.title}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Vocabulary</h2>
          <Link href="/posts/vocabulary">
            <p className="cursor-pointer opacity-70 hover:opacity-100">
              View More
            </p>
          </Link>
        </div>
        <hr className="my-5 mx-auto w-full border border-gray-300" />
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
          {vocabularyPosts?.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer overflow-hidden ">
                <img
                  className="h-60 w-full rounded object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                  src={urlFor(post.mainImage).url()!}
                />
                <div className="flex justify-between bg-white py-3">
                  <div>
                    <p className="text-sm">{post.category.title}</p>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">{post.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Grammar</h2>
          <Link href="/posts/grammar">
            <p className="cursor-pointer opacity-70 hover:opacity-100">
              View More
            </p>
          </Link>
        </div>
        <hr className="my-5 mx-auto w-full border border-gray-300" />
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
          {grammarPosts?.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer overflow-hidden ">
                <img
                  className="h-60 w-full rounded object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                  src={urlFor(post.mainImage).url()!}
                />
                <div className="flex justify-between bg-white py-3">
                  <div>
                    <p className="text-sm">{post.category.title}</p>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">{post.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Idioms&Phrases</h2>
          <Link href="posts/idiomsphrases">
            <p className="cursor-pointer opacity-70 hover:opacity-100">
              View More
            </p>
          </Link>
        </div>
        <hr className="my-5 mx-auto w-full border border-gray-300" />
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
          {idiomsPosts?.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer overflow-hidden ">
                <img
                  className="h-60 w-full rounded object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                  src={urlFor(post.mainImage).url()!}
                />
                <div className="flex justify-between bg-white py-3">
                  <div>
                    <p className="text-sm">{post.category.title}</p>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">{post.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Others</h2>
          <Link href="/posts/others">
            <p className="cursor-pointer opacity-70 hover:opacity-100">
              View More
            </p>
          </Link>
        </div>
        <hr className="my-5 mx-auto w-full border border-gray-300" />
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
          {othersPosts?.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer overflow-hidden ">
                <img
                  className="h-60 w-full rounded object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                  src={urlFor(post.mainImage).url()!}
                />
                <div className="flex justify-between bg-white py-3">
                  <div>
                    <p className="text-sm">{post.category.title}</p>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">{post.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPaginatedPost({
    offset: 0,
    limit: 3,
    categoryName: '',
  })
  const grammarPosts = await getPaginatedPost({
    offset: 0,
    limit: 3,
    categoryName: 'Grammar',
  })
  const vocabularyPosts = await getPaginatedPost({
    offset: 0,
    limit: 3,
    categoryName: 'Vocabulary',
  })
  const idiomsPosts = await getPaginatedPost({
    offset: 0,
    limit: 3,
    categoryName: 'IdiomsAndPhrases',
  })
  const othersPosts = await getPaginatedPost({
    offset: 0,
    limit: 3,
    categoryName: 'Others',
  })

  const allPosts = await getAllPostsForSearch()

  return {
    props: {
      posts,
      grammarPosts,
      vocabularyPosts,
      idiomsPosts,
      othersPosts,
      allPosts,
    },
    revalidate: 1,
  }
}
