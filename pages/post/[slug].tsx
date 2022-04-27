import Header from '../../components/Header'
import { urlFor } from '../../sanity'
import { Post } from '../../typings'
import { GetStaticProps } from 'next'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { getAllPost, getAllPostsForSearch, getPostBySlug } from '../../lib/api'

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
  allPosts: [Post]
}
const Post = ({ post, allPosts }: Props) => {
  const [submitted, setSubmitted] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
  }

  const switchCategory = (categoryName: string) => {
    switch (categoryName) {
      case 'Vocabulary':
        return <p className="text-green-500">{categoryName}</p>
      case 'Grammar':
        return <p className="text-red-500">{categoryName}</p>
      case 'IdiomsAndPhrases':
        return <p className="text-blue-500">Idioms&Phrases</p>
      case 'Others':
        return <p className="text-gray-500">{categoryName}</p>
    }
  }

  return (
    <main>
      <Header posts={allPosts} />

      <article className="mx-auto max-w-3xl p-5">
        <div className="mt-5 mb-1 flex justify-between">
          {switchCategory(post?.category.title)}
          <p className="text-sm font-extralight">
            Published at{' '}
            {new Date(post?._createdAt).toLocaleString().slice(0, 9)}
          </p>
        </div>
        <h1 className="mb-3 text-3xl font-bold">{post?.title}</h1>
        <h2 className="mb-2 text-lg font-light text-gray-500">
          {post?.description}
        </h2>
        {post?.mainImage && (
          <img
            className="h-90 w-full object-cover"
            src={urlFor(post?.mainImage).url()!}
          />
        )}

        <div className="mt-10">
          {post?.body && (
            <PortableText
              content={post.body}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              serializers={{
                normal: (props: any) => (
                  <p className="my-5 text-lg" {...props}></p>
                ),
                h1: (props: any) => (
                  <h1 className="my-5 text-4xl font-bold" {...props}></h1>
                ),
                h2: (props: any) => (
                  <h2 className="my-5 text-3xl font-bold" {...props}></h2>
                ),
                h3: (props: any) => (
                  <h3 className="my-5 text-2xl font-bold" {...props}></h3>
                ),
                h4: (props: any) => (
                  <h4 className="my-5 text-xl font-bold" {...props}></h4>
                ),

                ul: (props: any) => <ul className="my-5" {...props}></ul>,
                li: ({ children }: any) => (
                  <li className="my-1 ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
                blockquote: ({ children }: any) => (
                  <blockquote className="border-l-8 py-5 pl-5 text-lg">
                    {children}
                  </blockquote>
                ),
              }}
            />
          )}
        </div>
      </article>

      <hr className="my-5 mx-auto w-11/12 max-w-lg border border-yellow-300" />
      {submitted ? (
        <div className="my-10 mx-auto flex w-11/12 max-w-2xl flex-col bg-yellow-300 p-7 text-black">
          <h3 className="text-center text-2xl font-bold">
            Thank you for submitting your comment!
          </h3>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
        >
          <h4 className="text-3xl font-bold">Leave a comment</h4>
          <hr className="mt-2 py-3" />

          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={post?._id}
          />
          <div className="flex flex-col justify-between md:flex-row">
            <label className="bloack mb-5 w-full md:mr-10">
              <span className="text-gray-700">Name</span>
              <input
                {...register('name', { required: true })}
                className="form-input mt-1 block w-full  rounded border py-2 px-3 shadow outline-none ring-yellow-300 focus:ring"
                type="text"
              />
            </label>
            <label className="bloack mb-5 w-full md:ml-10 ">
              <span className="text-gray-700">Email</span>
              <input
                {...register('email', { required: true })}
                className="form-input mt-1  block w-full  rounded border py-2 px-3 shadow outline-none ring-yellow-300 focus:ring"
                type="text"
              />
            </label>
          </div>
          <label className="bloack mb-5">
            <span className="text-gray-700">Comment</span>
            <textarea
              {...register('comment', { required: true })}
              className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-300 focus:ring"
              rows={3}
            />
          </label>

          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">- The Name Field is required</span>
            )}
            {errors.email && (
              <span className="text-red-500">
                - The Email Field is required
              </span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                - The Comment Field is required
              </span>
            )}
          </div>

          <input
            value="Submit"
            type="submit"
            className="shaddow focus:shaddow-outline  cursor-pointer rounded border-2 border-black py-2 px-4 font-bold text-black hover:bg-yellow-300 hover:text-black focus:outline-none"
          />
        </form>
      )}

      <div className="my-10 mx-auto flex w-11/12 max-w-2xl flex-col space-y-2 rounded p-10 shadow shadow-gray-500">
        <h3 className="text-4xl">Comments</h3>
        <hr className="pb-2" />
        {post?.comments.length === 0 && (
          <p className="text-center font-light text-gray-500">
            No comments yet
          </p>
        )}
        {post?.comments.map((comment) => (
          <div key={comment._id}>
            <p className="text-lg font-bold">{comment.name}</p>
            <p> {comment.comment}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string)
  const allPosts = await getAllPostsForSearch()

  return {
    props: { post, allPosts },
    revalidate: 60,
  }
}

export const getStaticPaths = async () => {
  const posts = await getAllPost()

  const paths = posts?.map((post: Post) => ({ params: { slug: post.slug } }))
  return {
    paths,
    fallback: true,
  }
}
