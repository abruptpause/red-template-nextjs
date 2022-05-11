#!/usr/bin/env node

const Header = ({ text = ['hero', 'title', 'text'], caption = 'left sticky' }) => {
  const css = {
    // text-super-xl
    div: 'freight-neo sticky flex h-screen top-0 text-center text-white text-9xl col-span-2 justify-center items-center',
    // div: 'freight-neo sticky flex h-screen top-0 right-0 text-center text-white text-9xl col-span-2 justify-center items-center',
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

const Square = ({ text, img, start = 'col-start-2' }) => {
  const css = {
    div: `bg-cover bg-center relative grid justify-center w-full items-center aspect-square bg-white my-10 scroll-element col-span-7 ${start}`,
  }
  return (
    <div className={css.div} style={{
        backgroundImage: `url('${img}')`
      }}>
    </div>
  )
}

// the header and the right bar.
const Sticky = () => {
  const css = {
    section: 'absolute top-0 left-0 grid grid-cols-3 w-full h-full',
    div: `sticky overflow-y-scroll col-span-1 col-start-3 h-screen top-0 scroll-container bg-slate-300 grid grid-cols-12 scroll-py-20`,
    // div: `sticky overflow-y-scroll col-span-1 col-start-3 h-screen top-0 px-16 py-10 scroll-container scroll-pt-16 ${bg} grid grid-cols-10`,
    h1: 'col-span-12 text-white freight-neo text-center top-0 left-0 text-3xl pt-4 sticky'
    // h1: 'col-span-10 text-white freight-neo text-center top-0 left-0 text-3xl my-16 scroll-element'
  }

  return (
    <section className={css.section}>
      <Header text={['featuring', 'art', 'by', 'john ivy']} caption='abrupt pause' />

      <div className={css.div}>
        <h1 className={css.h1}>featured work</h1>
        <Square img='/images/side/SIDE1.png' start='col-start-5' />
        <Square img='/images/side/SIDE2.png' />
        <Square img='/images/side/SIDE3.png' start='col-start-5' />

        <Square img='/images/side/SIDE2.png' />
        <Square img='/images/side/SIDE3.png' start='col-start-5' />
        <Square img='/images/side/SIDE2.png' />
      </div>
    </section>
  )
}

const PlaceHolder = ({ bg = 'bg-white', fg = 'text-slate-200', img, text }) => {
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
      <PlaceHolder img='/images/main/hero.jpg' />
      <PlaceHolder bg='bg-slate-100' />
    </section>

    <PlaceHolder bg='bg-slate-200' />
    <PlaceHolder bg='bg-slate-100' />
    <PlaceHolder />
  </main>
)

export default Home
