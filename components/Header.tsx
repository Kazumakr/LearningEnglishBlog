import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex w-full justify-between bg-black p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <span className="cursor-pointer text-3xl font-bold text-yellow-300">
            LEB
          </span>
        </Link>
        <input
          className="rounded border border-gray-500 bg-black py-1 pl-1 text-white outline-none ring-yellow-300 focus:ring"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="hidden items-center space-x-5 text-yellow-300 md:flex">
        <Link href="/posts/vocabulary">
          <h3 className="cursor-pointer">Vocabulary</h3>
        </Link>
        <Link href="/posts/grammar">
          <h3 className="cursor-pointer">Grammar</h3>
        </Link>
        <Link href="/posts/idiomsphrases">
          <h3 className="cursor-pointer">Idioms&Phrases</h3>
        </Link>
        <Link href="/posts/others">
          <h3 className="cursor-pointer">Others</h3>
        </Link>
      </div>
    </header>
  )
}

export default Header
