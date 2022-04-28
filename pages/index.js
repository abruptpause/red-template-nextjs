#!/usr/bin/env node

import Simple from '../components/simple.js'
import Table from '../components/table.js'
import Text from '../components/text.js'

const Home = () => (
  <main>
    <div className="text-xl min-h-screen bg-red-400">
      <h1>HEADER ONE</h1>

      <Simple />

      <h2>HEADER TWO</h2>
      <p>PARAGRAPH CONTENT</p>
    </div>

    <section className="min-h-screen bg-blue-200">
      <Table />
    </section>

    <section className="min-h-screen bg-blue-300">
      <Text />
    </section>
  </main>
)

export default Home
