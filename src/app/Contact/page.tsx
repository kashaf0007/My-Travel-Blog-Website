import React from 'react'
const Contact = () => {
  return (
    <div id='Contact' >

          <section className="contact text-gray-600 body-font relative ">
    <div className="container px-8 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-auto h-95 w-96 sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0" 
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        
          
    style={{ filter: "grayscale(2) contrast(1.2) opacity(4)" }}
        />
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-4xl font-bold  mb-6 text-center text-black"  >Contact Us</h2>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-black">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 "
          />
        </div>
        <button className="text-white bg-green-400 border-0 py-2 px-6 font-bold  rounded text-xl">
          Send Message
        </button>
       
      </div>
  
    </div>
    
  </section>
  
    </div>
  )
}

export default Contact
