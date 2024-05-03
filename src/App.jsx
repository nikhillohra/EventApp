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

  <section className='mb-10' >
  <Recommend/>
  </section>

    <br/>
  <section >
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
