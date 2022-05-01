#!/usr/bin/env node

const css = {
  Header: 'text-center text-blue-800 text-8xl flex col-span-2 justify-center items-center sticky h-screen top-0 right-0',
  StickyImage: 'grid justify-center w-full items-center aspect-square bg-red-200 text-red-700 text-5xl text-center my-24',
  Sticky: {
    section: 'absolute top-0 left-0 grid grid-cols-3 w-full h-full bg-red-600/[.08]',
    div: 'sticky overflow-y-scroll col-span-1 col-start-3 h-screen top-0 right-0 bg-red-400 p-16'
  },
  PlaceHolder: {
    section: 'flex items-center justify-center min-h-screen',
    h1: 'text-center text-5xl capitalize'
  }
}

const Header = ({ text = ['HEADER', 'TEXT'] }) => (
  <div className={css.Header}>
    <div>
      {
        Array.isArray(text) && text.length
        ? text.map((line, key) => (<h1 key={key}>{line}</h1>))
        : null
      }
    </div>
  </div>
)

const StickyImage = ({ text }) => (
  <div className={css.StickyImage}>
    <div>
      {
        text
        ? <h1>Image</h1>
        : null
      }
    </div>
  </div>
)

const Sticky = () => (
  <section className={css.Sticky.section}>
      <Header />
      <div className={css.Sticky.div}>
        <StickyImage />
        <StickyImage />
        <StickyImage />
      </div>
  </section>
)

const PlaceHolder = ({ bg = 'slate-200', fg = 'slate-700', text }) => (
  <section className={`${css.PlaceHolder.section} bg-${bg}`}>
  {
    text
    ? <h1 className={`${css.PlaceHolder.h1} text-${fg}`}>{text}</h1>
    : null
   }
  </section>
)

const Home = () => (
  <main>
    <section className='relative'>
      <Sticky />
      <PlaceHolder bg='blue-200' />
      <PlaceHolder bg='blue-400' />
    </section>
    <PlaceHolder bg='teal-200' />
    <PlaceHolder bg='teal-500' />
    <PlaceHolder bg='teal-800' />
  </main>
)

export default Home
