const GrammarHero = () => {
  return (
    <div className="flex items-center justify-center bg-yellow-400 py-10">
      <div className="flex flex-col  items-center space-y-5">
        <h1 className="max-w-2xl font-serif text-6xl font-bold text-black">
          Grammar
        </h1>
        <h2 className="text-black">This is Grammar page</h2>
      </div>
      <img className="hidden h-80 md:inline-flex" src="/images/grammar.svg" />
    </div>
  )
}

export default GrammarHero
