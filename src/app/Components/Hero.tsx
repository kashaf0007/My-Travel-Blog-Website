import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className=' h-screen flex items-center bg-cover bg-center h-5% w-100'  style={{backgroundImage:"url('/background.jpeg' )"}}>
            <div className=' pl-0 ml-48 md:pl-16 text-black text-center'>
                <h1 className='text-6xl font-bold drop-shadow-md ' >WELCOME</h1>
                 <p className='text-4xl mt-3 ml-14 '>Amazing Places on earth Tours and Travels</p>
                 
                </div>
        </section>
    </div>
  )
}

export default Hero
