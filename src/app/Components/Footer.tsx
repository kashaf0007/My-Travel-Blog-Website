import React from 'react'
import Image from 'next/image';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Footer = () => {
  return (
    <div className=' bg-gray-300'>
     <footer className="text-black body-font mt-8">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <Image 
        src="/logo.jpeg"
         alt="logo"
         height={100}
         width={150}
         className="rounded-md"
     />
  <span className="ml-3 text-2xl flex font-bold">BLOG-WEBSITE</span>
      </a>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-xl mb-3">
         BLOG
        </h2>
          <div className="list-none mb-10">
            <p className="text-black hover:text-blue-800">The Blog offers insightful articles, updates, and expert opinions on a variety of topics.</p>
            </div>  
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-xl mb-3">
         CONTACT US
        </h2>
        <div className=" mb-10">
           <a className="text-black hover:text-blue-800">nasreenan47@gmail.com</a>
            <br />
            <a className="text-black hover:text-blue-800">0316 1329633</a>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-xl mb-3">
         LINKS
        </h2>
        <div className="list-none mb-10 text-black  ">
           <a className='hover:text-blue-800' >Blog</a>
            <br />
            <a className=" hover:text-blue-800">Home</a>
            <br />
            <a className=" hover:text-blue-800">Contact</a>
            <br />           
           <a className=" hover:text-blue-800">About</a>
          
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-xl mb-3">
       SUBSCRIBE
        </h2>
        <div className="list-none mb-10 text-black hover:text-blue-900 ">
        <p>Get our weekly newsletter for latest blog news, exclusive blogs and deals, and more.</p>
        </div>
        
        <button className="text-white bg-green-300 border-0 py-2 px-4 rounded text-lg"> SUBSCRIBE</button>
      </div>

    </div>
  </div>
  
  <div className=" bg-gray-300 ">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-950text-center sm:text-left text-xl">
      Copyright © 2024. All rights reserved.
      </p>
     <div className='justify-center items-center mr-40 ml-20'></div>
        <a className="text-gray-950 flex gap-4 text-xl ">
          <p>Terms & Conditions</p>
          <p>Refund Policy</p>
          <p>Privacy Policy</p>
        </a>

    <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
  <a className="text-gray-950 flex gap-3 text-2xl">
    <IoLogoLinkedin />
    <FaDiscord />
    <SiGmail />
  </a>
</div>
</div>
  </div>
</footer>
    </div>
  )
}

export default Footer


