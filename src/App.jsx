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

  <section className='mb-40' >
  <Recommend/>
  </section>

    <br/>
  <section className='mt-20'>
  <Upcoming/>
  </section>
  


  <section className='mt-20'>
  <Footer/>
  </section>



  </main>
   </>
  )
}

export default App
