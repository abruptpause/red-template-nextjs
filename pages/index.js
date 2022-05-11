#!/usr/bin/env node

const Header = ({ text = ['hero', 'title', 'text'], caption = 'left sticky' }) => {
  const css = {
    // div: 'freight-neo sticky flex h-screen top-0 right-0 text-center text-blue-700 text-super-xl col-span-3 justify-center items-center',
    div: 'freight-neo sticky flex h-screen top-0 right-0 text-center text-blue-700 text-9xl col-span-2 justify-center items-center',
    h1: 'text-xl pb-12'
  }

  return (
    <div className={css.div}>
      <div>
        <h1 className={css.h1}>{caption}</h1>
        {
          Array.isArray(text) && text.length
            ? text.map((line, key) => (<h1 key={key}>{line}</h1>))
            : null
        }
      </div>
    </div>
  )
}

const Square = ({ text, img }) => {
  const css = {
    div: 'relative grid justify-center w-full items-center aspect-square bg-red-200 text-red-700 text-5xl text-center my-24 scroll-element',
    h1: 'freight-neo text-center text-red-300 text-2xl'
  }

  return (
    <div className={css.div} style={{
        backgroundImage: `url('${img}')`
      }}>
      <div>
        <h1 className={css.h1}>Media</h1>
        {
        text
          ? <h1>Image</h1>
          : null
      }
      </div>
    </div>
  )
}

// the header and the right bar.
const Sticky = () => {
  const css = {
    section: 'absolute top-0 left-0 grid grid-cols-3 w-full h-full',
    div: 'sticky overflow-y-scroll col-span-1 col-start-3 h-screen top-0 bg-red-400 p-16 scroll-container scroll-pt-16',
    h1: 'absolute freight-neo text-center text-red-500 top-0 left-0 w-full py-16 text-3xl scroll-element'
  }

  return (
    <section className={css.section}>
      <Header text={['featuring', 'art', 'by', 'john ivy']} caption='abrupt pause' />

      <div className={css.div}>
        <h1 className={css.h1}>right sticky</h1>
        <Square img='/images/side/SIDE1.png' />
        <Square img='/images/side/SIDE2.png' />
        <Square img='/images/side/SIDE3.png' />
      </div>
    </section>
  )
}

const PlaceHolder = ({ bg = 'bg-slate-100', fg = 'text-slate-200', img, text }) => {
  const css = {
    section: `flex items-center justify-center min-h-screen bg-center bg-cover ${bg}`,
    h1: `freight-neo text-center text-5xl ${fg}`
  }

  return (
    <section
      className={css.section}
      style={{
        backgroundImage: `url('${img}')`
      }}
    >
      {
      text
        ? <h1 className={css.h1}>{text}</h1>
        : null
    }
    </section>
  )
}

const Home = () => (
  <main>
    <section className='relative'>
      <Sticky />
      <PlaceHolder bg='bg-blue-200' fg='text-blue-300' img='/images/main/hero.jpg' />
      <PlaceHolder bg='bg-white' />
    </section>

    <PlaceHolder bg='bg-teal-200' fg='text-teal-300' img='/images/main/JIV1.jpg' />
    <PlaceHolder bg='bg-teal-400' fg='text-teal-500' img='/images/main/JIV4.jpg' />
    <PlaceHolder bg='bg-teal-600' fg='text-teal-700' img='/images/main/JIV5.jpg' />
  </main>
)

export default Home
