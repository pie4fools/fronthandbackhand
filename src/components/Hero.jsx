import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    // Hero rectangle 
    <div className='main'>
        <div className=''>
            <h1 className='text-[#00dfd4] font-bold p-2 text-3xl'>Front Hand Back-Hand</h1>
            <p className='text-sm font-bold md:py-6'>Sign-up - Login - Manipulate data on the Back-end from the Front-end</p>
            <div className='flex justify-center items-center'>  
            </div>
            {/* Get started button, transparent */}
            <Link
            smooth={true}
            offset={1900}
            duration={1000}
            spy={true}
            to="Footer"
            className="cursor-pointer"
          >
            <button id="Footer" className='getstartedbtn'>Projects</button>
          </Link>
        </div>
    </div>
  )
}

export default Hero