import React from 'react'
import { Link } from 'react-scroll'
import  vercontrolimg from '../images/vercontrolimg.svg'
import pipelineimg from '../images/pipelineimg.svg'
import constantimproveimg from '../images/constantimproveimg.svg'

const Hero = () => {
  return (
    // Hero rectangle 
    <div className='main'>
        <div className=''>
            <h1 className='text-black font-bold p-2 text-5xl pl-8 ml-10'>Front-Hand Back-Hand</h1>
            <p className='text-sm font-bold md:py-6 ml-10 pl-9 text-gray-500'>Sign-up - Login - Manipulate data on the Back-end from the Front-end</p>
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
            <button id="Footer" className='getstartedbtn'>Get Started</button>
          </Link>
        </div>
        <div className='card-container'>
          <div className='card1'>
            <img class='cardimages' src={vercontrolimg} alt='Computer monitor showing code'></img>
            <p class='cardptag'>Version control from GitHub</p>
          </div>
          <div className='card2'>
            <img class='pipelineimg' src={pipelineimg} alt='Pipes connecting'></img>
            <p class='pipelineptag'>CI/CD Pipeline from GitHub Flows</p>
          </div>
          <div className='card3'>
            <img class='cardimages' src={constantimproveimg} alt='Cartoon head of a man with a diamond as a thought bubble'></img>
            <p class='cardptag'>Product that is constantly improving</p>
          </div>
        </div>
        <div>
        <div className='signupboxcontainer'>
          <div className='signupboxsubmit'>
            <input class='emailbox' />
            <input class='passwordbox' />
            <input class='reenterpasswordbox' />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Hero