import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { urlFor } from '../sanity'
import Link from 'next/link'

import { Post } from '../typings'

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>
  posts: [Post]
  keyword: string
  setKeyword: Dispatch<SetStateAction<string>>
}

const SearchModal = ({ setShow, posts, keyword, setKeyword }: Props) => {
  const [searchResults, setSearchResults] = useState<Post[]>([])

  useEffect(() => {
    if (keyword) {
      const result = posts.filter((post) => {
        return post.title.toLowerCase().match(keyword.toLowerCase())
      })
      setSearchResults(result)
    } else {
      setSearchResults(posts)
    }
  }, [keyword])

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="h-modal fixed top-0 left-0 right-0 z-50 h-full  w-full overflow-y-auto overflow-x-hidden bg-black  bg-opacity-90 md:inset-0 "
    >
      <div className="relative h-full w-full p-4">
        {/* <!-- Modal content --> */}
        <div className="relative">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 ">
            <h3 className="text-xl font-semibold text-white">Search Posts</h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white"
              data-modal-toggle="defaultModal"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="space-y-6 p-6 text-white">
            <input
              className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 text-7xl leading-tight text-white focus:outline-none"
              type="text"
              placeholder="Search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
            {searchResults?.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div
                  className="group cursor-pointer overflow-hidden "
                  onClick={() => setShow(false)}
                >
                  <img
                    className="h-60 w-full rounded object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                    src={urlFor(post.mainImage).url()!}
                  />
                  <div className="flex justify-between  py-3">
                    <div>
                      <p className="text-sm text-white">
                        {post.category.title}
                      </p>
                      <p className="text-lg font-bold text-white">
                        {post.title}
                      </p>
                      <p className="text-xs text-white">{post.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal
