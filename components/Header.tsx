import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/state'
import SearchModal from './SearchModal'
import { FaSearch } from 'react-icons/fa'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}
const Header = ({ posts }: Props) => {
  const { show, setShow } = useContext(MyContext)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShow(true)
  }

  useEffect(() => {
    setKeyword('')
  }, [isOpen])
  return (
    <header className="sticky top-0 z-10   w-full  bg-black p-5">
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <span className="cursor-pointer text-3xl font-bold text-yellow-300">
              LEB
            </span>
          </Link>
        </div>
        <div className="hidden items-center space-x-5 text-yellow-300 md:flex">
          <Link href="/posts/vocabulary">
            <h3 className="cursor-pointer hover:underline hover:opacity-90">
              Vocabulary
            </h3>
          </Link>
          <Link href="/posts/grammar">
            <h3 className="cursor-pointer hover:underline hover:opacity-90">
              Grammar
            </h3>
          </Link>
          <Link href="/posts/idiomsphrases">
            <h3 className="cursor-pointer hover:underline hover:opacity-90">
              Idioms&Phrases
            </h3>
          </Link>
          <Link href="/posts/others">
            <h3 className="cursor-pointer hover:underline hover:opacity-90">
              Others
            </h3>
          </Link>
          <FaSearch
            className="cursor-pointer hover:scale-110 hover:opacity-90"
            onClick={() => {
              setShow(true)
              console.log('clicked')
            }}
          />
        </div>
        <div
          className="flex flex-col justify-center space-y-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`ease h-1 w-8 transform bg-yellow-300 transition duration-300 ${
              isOpen && 'translate-y-3 rotate-45 '
            }`}
          ></div>
          <div
            className={`ease h-1 w-8 transform bg-yellow-300 transition duration-300 ${
              isOpen && 'opacity-0'
            }`}
          ></div>
          <div
            className={`ease h-1 w-8 transform bg-yellow-300 transition duration-300 ${
              isOpen && '-translate-y-3 -rotate-45 '
            }`}
          ></div>
        </div>

        <div
          className={`fixed top-16 right-0 flex  h-2/5 w-screen transform flex-col  items-center justify-around overflow-y-auto  bg-black pb-5  font-bold text-yellow-300 transition duration-500 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <form
            className="mb-3 grid w-full grid-cols-4 border border-gray-500 py-2 px-2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              className="col-span-3 rounded  bg-transparent  py-2 text-white focus:outline-none"
              placeholder="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              className="col-span-1 flex items-center justify-center "
              type="submit"
            >
              <FaSearch className="text-gray-500" />
            </button>
          </form>

          <Link href="/posts/vocabulary">
            <h3 className="cursor-pointer hover:underline hover:opacity-90">
              Vocabulary
            </h3>
          </Link>
          <Link href="/posts/grammar">
            <h3 className="cursor-pointer hover:underline hover:opacity-90">
              Grammar
            </h3>
          </Link>
          <Link href="/posts/idiomsphrases">
            <h3 className="cursor-pointer hover:underline hover:opacity-90">
              Idioms&Phrases
            </h3>
          </Link>
          <Link href="/posts/others">
            <h3 className="cursor-pointer hover:underline hover:opacity-90">
              Others
            </h3>
          </Link>
        </div>

        {show && (
          <SearchModal
            setShow={setShow}
            posts={posts}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        )}
      </div>
    </header>
  )
}

export default Header
