#!/usr/bin/env node

const Home = () => (
  <main>
    <div className="relative">
      <div className='absolute top-0 left-0 grid grid-cols-3 w-full h-full' style={{ backgroundColor: 'rgba(255, 0, 0, 0.4)' }}>
        <div className='bg-green-200 col-span-1 col-start-3'>
          <div className='top-0 right-0 sticky flex bg-teal-600 items-center justify-center'>
            <h1 className='text-center text-3xl capitalize'>sticky content</h1>
          </div>
        </div>
      </div>

      <section className='flex items-center justify-center min-h-screen bg-purple-400'>
        <h1 className='text-center text-5xl capitalize'>section 1</h1>
      </section>

      <section className='flex items-center justify-center min-h-screen bg-purple-700'>
        <h1 className='text-center text-5xl capitalize'>section 2</h1>
      </section>
    </div>

    <section className='relative flex items-center justify-center min-h-screen bg-purple-200'>
      <h1 className='text-center text-5xl capitalize'>section 3</h1>
    </section>

    <section className='relative flex items-center justify-center min-h-screen bg-blue-500'>
      <h1 className='text-center text-5xl capitalize'>section 4</h1>
    </section>
  </main>
)

export default Home
