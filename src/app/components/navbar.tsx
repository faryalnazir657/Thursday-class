import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div className='bg-teal-800 h-12'>
        <div className='text-yellow-400 flex justify-between items-center'>
      <h1 className='text-xl m-2 cursor-pointer'>Navbar</h1>
     
     <ul className='flex gap-3 mr-4 cursor-pointer'>
     <Link className='hover:text-pink-500' href = "/">Home</Link>
    <Link className='hover:text-purple-500' href = "/">About</Link>
    <Link className='hover:text-red-500' href = "/">Skills</Link>
    <Link className='hover:text-orange-500' href = "/">Contact</Link>
     </ul>
    </div>

    </div>
  )
}

export default navbar
