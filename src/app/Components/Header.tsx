import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
<div>

  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gray-300">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
   <Image
    src="/logo.jpeg" 
    alt="logo"
    height={30} 
    width={100} />
      <span className="ml-3 text-2xl font-bold ">BLOG-WEBSITE</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base  justify-center ">
      <Link href="/" className="mr-5 text-black hover:text-gray-500 font-bold text-2xl">Home</Link>
      <Link href="/Blog" className="mr-5  text-black hover:text-gray-500 font-bold text-2xl">Blog</Link>
      <Link href="/About" className="mr-5  text-black hover:text-gray-500 font-bold text-2xl">About</Link>
      <Link href="/Contact" className="mr-5  text-black hover:text-gray-500 font-bold text-2xl">Contact</Link>
</nav>
</div>
</div>
  )
}

export default Header
