import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div >
   <section className="text-gray-600 body-font">

<div className="text-black body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text-center w-full ">
      <h1 className="sm:text-3xl text-3xl font-extrabold title-font mb-2 text-blue-900">
      ABOUT ME
      </h1>
      <h3 className='text-black font-bold text-2xl'>Hi I am Kashaf Aman</h3>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-blue-900">
   
     I am a web developer passionate. My tools includes HTML, CSS, JAVASCRIPT, TYPESCRIPT and am keen on learning new technologies.
      I am student of Intermediate in Medical Science and also the student of Governor House IT Initiative. Now bring into the field of web development
      I am passionate about learning new technologies and constantly improving my skills.
      </p>
    </div>
  </div>
</div>

      <div className="flex flex-col sm:flex-row mt-10 mb-6">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 ">
          <div className="w-60 h-60 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
       <Image
       className='w-64 h-60 rounded-full '
        src="/profile-img.jpeg" 
        alt="profile image" />
        
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-bold text-3xl title-font mt-4 text-blue-900">
              Kashaf Aman
            </h2>
            <p className="text-base text-blue-900">
            I am student of Intermediate in Medical Science and also the student of Governor House IT Initiative. Now bring into the field of web development
            I am passionate about learning new technologies and constantly improving my skills.
            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <h1 className='font-bold text-3xl justify-center items-center ml-16  text-blue-900'>OUR MISSION</h1>
        <br />
          <p className="leading-relaxed text-xl text-blue-900 font-medium mb-3">
          Our mission is to create a positive impact by providing exceptional services and innovative solutions. We aim to empower individuals and businesses to achieve their goals with confidence.
          technology, lifestyle, or personal development, I strive to create a blog that serves as both a resource and an inspiring platform for curious minds.
          <br /> 
           <br />
          I believe that sharing knowledge has the power to shape the future. Collaboration, transparency, and excellence are at the heart of everything we do. Together, lets build a brighter future!
          </p>
         <button className="text-white bg-green-400 border-0 py-2 px-6  rounded text-xl font-bold">
            Join Me
         </button>
        </div>
      </div>

</section>

       </div>
  )
}

export default About