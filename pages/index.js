#!/usr/bin/env node

// import Simple from '../components/simple.js'
// import Table from '../components/table.js'
// import Text from '../components/text.js'

const Home = () => (
  <main>

    <section className="grid grid-cols-3 bg-cyan-700 h-screen" label="Hero Section">

      <div className="relative grid grid-cols-8 items-start bg-green-200 col-span-1 col-start-3">

        <h1 className="absolute bottom-0 right-0 w-full text-center bg-teal-100 p-10 text-lg capitalize">sticky container</h1>

        <div className="top-0 right-0 sticky flex bg-teal-600 col-span-6 col-start-2 aspect-square items-center justify-center">
          <h1 className="text-center text-3xl capitalize">sticky element</h1>
        </div>

      </div>

    </section>

    <section className=" flex items-center justify-center min-h-screen bg-purple-200">
      <h1 className="text-center text-5xl capitalize">section one</h1>
    </section>


    <section className=" flex items-center justify-center min-h-screen bg-blue-500">
      <h1 className="text-center text-5xl capitalize">section two</h1>
    </section>
  </main>
)

export default Home
