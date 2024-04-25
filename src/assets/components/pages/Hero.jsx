import React from 'react'
//motion framer
import { motion } from 'framer-motion'

// doctora image
import doctora from '../../images/doctora.png'

//icons fa6
import { FaPhoneVolume } from 'react-icons/fa6'  

function Hero() {
  return (
    <section className='w-full flex justify-center h-screen pt-52'>
      <div className='max-w-screen-2xl w-full '>
        <div className='flex justify-between items-center '>
          <div className='w-3/5'>
            <h1 className='text-6xl font-bold tracking-[120%] text-[#011632]'>Get Ready For Your Best Ever Dental Experience!</h1>
            <p className='text-xl tracking-[155%] max-w-[537px] mt-6'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
            <div className='flex mt-7'>
              <button className='bg-[#D9B36C] text-white py-4 rounded-xl font- w-64 font-semibold'>Book an Appointment</button>
              <div className='flex items-center ml-4'>
                <div className=' bg-gradient-to-b from-[#FFECC9] to-white text-[#D9B36C] py-4 rounded-xl w-16 h-16 flex justify-center items-center'>
                  <FaPhoneVolume className='text-3xl' />
                  </div>
                <div className='ml-4'>
                <p className='text-[#011632] font-semibold'>Call Us Now</p>
                <p className='text-[#D9B36C] font-bold ml-2'>+1 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2 relative'>
            <img src={doctora} alt='hero' className='w-full h-full object-cover' />
          </div>
        </div>

        <div className='flex justify-between items-center h-20 w-full bg-[#E6F6FE]'>
        </div>
      </div>
    </section>
  )
}

export default Hero