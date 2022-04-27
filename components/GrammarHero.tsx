const GrammarHero = () => {
  return (
    <div className="flex items-center justify-center bg-yellow-400 py-10">
      <div className="flex flex-col  items-center space-y-5">
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-black md:text-5xl">
          Grammar
        </h1>
        <h2 className="text-black">This is Grammar page</h2>
      </div>
      <img
        className="hidden h-80 w-96 md:inline-flex"
        src="/images/grammar.svg"
      />
    </div>
  )
}

export default GrammarHero
