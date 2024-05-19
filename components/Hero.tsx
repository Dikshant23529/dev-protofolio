import React from 'react'

const Hero = () => {
  return (
    <div className='pt-24'>
      <div>
        <div className='flex justify-center mt-0'>
          <p className='text-white font-light' style={{letterSpacing: '25%', lineHeight: '19.2px'}}>
            DYNAMIC WEB MAGIC WITH NEXT.JS
          </p>
        </div>

        <div>
          <h3 className='flex flex-col text-7xl font-bold justify-center text-center mt-8'>
            <span className='text-white'>
            Transforming Concepts into 
            </span>
            <span className='mt-2'>
            <span className='text-white'>Seamless </span><span style={{color: '#CBACF9'}}>User Experience</span>
            </span>
          </h3>

          <h4 className='text-white text-center mt-8 font-light' style={{letterSpacing: '25%', lineHeight: '19.2px'}}>
            Hi I am Dikshant, a Next.js Devloper based in India
          </h4>
        </div>

        <div className='flex justify-center mt-8'>
          <button className='p-3 text-base text-center rounded-md' style={{ background: 'linear-gradient(#04071D, #0C0E23)', color: '#ffffff', alignItems: 'center', border: '2px solid #6971A266' }}>
            See My Work
          </button>
        </div>

      </div>

    </div>
  )
}

export default Hero