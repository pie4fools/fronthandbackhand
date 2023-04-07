import React from 'react'
import { Link } from 'react-scroll'
import  vercontrolimg from '../images/vercontrolimg.svg'
import pipelineimg from '../images/pipelineimg.svg'
import constantimproveimg from '../images/constantimproveimg.svg'
import facebooklogin from '../images/facebookloginimg.svg'
import googlesignin from '../images/googlesigninimg.svg'

const Hero = () => {
  return (
    // Hero rectangle 
    <div className=''>
        <div className='main'>
            <h1 className='text-black font-bold p-2 text-5xl pl-8 ml-10 pt-10 mt-10'>Front-Hand Back-Hand</h1>
            <p className='text-sm font-bold md:py-6 ml-10 pl-9 text-gray-500 mt-10'>Sign-up - Login - Manipulate data on the Back-end from the Front-end</p>
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
          <div className='signupptagcontainer'>
          <p className='signupboxptag'>Sign Up Now</p>
          <p className='signupboxptagmiddle'>Free access to a live chat</p>
          <p className='signupboxptag'>Create a free profile and start chatting</p>
          </div>
          <div className='signupboxsubmit'>
            <input class='emailbox' />
            <input class='passwordbox' />
            <input class='reenterpasswordbox' />
          <img class='ssobtns' src={googlesignin} alt='google sign in button'></img>
          <img class='ssobtns' src={facebooklogin} alt='facebook login button'></img>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Hero