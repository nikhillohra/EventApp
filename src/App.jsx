import React from 'react'
import { Header, Hero, Recommend, Upcoming, Footer } from './Components'



const App = () => {
  return (
   <>
   <main className='p-0 w-full`' >

  <section>
  <Header/>
  </section>

  <section >
  <Hero/>
  </section>

  <section className='mb-20' >
  <Recommend/>
  </section>

    <br/>
  <section className='mt-[10rem]' >
  <Upcoming/>
  </section>
  


  <section className='mt-30'>
  <Footer/>
  </section>



  </main>
   </>
  )
}

export default App
