const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-yellow-400">
      <div className="my-10 flex w-11/12 flex-col  items-center space-y-5 bg-black py-10">
        <h1 className="w-10/12 max-w-2xl font-serif text-5xl text-yellow-300 md:w-full md:text-6xl">
          <span className="text-8xl">L</span>earning{' '}
          <span className="text-8xl">E</span>nglish{' '}
          <span className="text-8xl">B</span>log
        </h1>
        <h2 className="w-10/12 text-yellow-300 md:text-center">
          Share my lerning history and my knowledge.
        </h2>
      </div>
    </div>
  )
}

export default Hero
