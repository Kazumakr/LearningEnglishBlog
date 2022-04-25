const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-yellow-400 py-10 lg:py-0">
      <div className="my-10 flex w-11/12 flex-col  items-center space-y-5 bg-black py-10">
        <h1 className="max-w-2xl font-serif text-6xl text-yellow-300">
          <span className="text-8xl">L</span>earning{' '}
          <span className="text-8xl">E</span>nglish{' '}
          <span className="text-8xl">B</span>log
        </h1>
        <h2 className="text-yellow-300">
          Share my lerning history and my knowledge.
        </h2>
      </div>
    </div>
  )
}

export default Hero
