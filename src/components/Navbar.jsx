import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white z-10'>
        <motion.h1
    initial={{
       x: -500,
       opacity: 0, 
    }}
    animate={{
        x: 0,
        opacity: 1,
    }}
    // LOGO area
    transition={{ duration: 1.5 }}  className='w-full text-3xl font-bold text-black'>LOGO</motion.h1>
        <motion.ul
    initial={{
       x: 100,
       opacity: 0, 
    }}
    animate={{
        x: 0,
        opacity: 1,
    }}
    transition={{ duration: 1.5 }} className='flex '>
        {/* Sign up button */}
            <a className='bg-black w-[80px] h-[34px] rounded-md text-center font-medium mt-7 mx-auto py-1.5 z-10 text-black hover:bg-white focus:ring focus:ring-white-300 transition ease-in-out' target="_blank" rel="noreferrer">Sign Up</a>
        {/* Login button */}
            <a className='bg-black w-[80px] h-[34px] rounded-md text-center font-medium mt-7 mx-auto py-1.5 z-10 text-black hover:bg-white focus:ring focus:ring-white-300 transition ease-in-out' target="_blank" rel="noreferrer">Login</a>
            <div className="z-10">
        </div>
        </motion.ul>
    </div>
    
  )
}

export default Navbar