const IdiomsHero = () => {
  return (
    <div className="flex items-center justify-center bg-yellow-400 py-10">
      <div className="flex flex-col  items-center space-y-5">
        <h1 className="max-w-2xl font-serif text-3xl font-bold text-black md:text-4xl">
          Idioms&Phrases
        </h1>
        <h2 className="text-black">This is Idiom page</h2>
      </div>
      <img
        className="hidden h-80 w-96 md:inline-flex"
        src="/images/idiomsphrases.svg"
      />
    </div>
  )
}

export default IdiomsHero
