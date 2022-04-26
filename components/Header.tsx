import Link from 'next/link'
import { useContext } from 'react'
import { MyContext } from '../context/state'
import SearchModal from './SearchModal'
import { FaSearch } from 'react-icons/fa'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}
const Header = ({ posts }: Props) => {
  const { show, setShow } = useContext(MyContext)
  return (
    <header className="sticky top-0 z-10  flex w-full justify-between bg-black p-5">
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
      {show && <SearchModal setShow={setShow} posts={posts} />}
    </header>
  )
}

export default Header
