import React from 'react'
//motion framer
import { motion } from 'framer-motion'

// doctora image
import doctora from '../../images/doctora.png'

//icons fa6
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaPhoneVolume } from 'react-icons/fa6'

function Hero() {
  return (
    <section className='w-full flex justify-center items-center h-screen'>
      <div className='max-w-screen-2xl w-full '>
        <div className='flex justify-between items-center pt-10'>
          <div className='w-1/2 md:pl-10 '>
            <h1 className='text-6xl font-bold tracking-[120%] text-[#011632]'>Get Ready For Your Best <br /> Ever Dental Experience!</h1>
            <p className='text-lg tracking-[155%] max-w-[537px] mt-6'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
            <div className='flex mt-7'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='bg-[#D9B36C] text-white rounded-xl w-64 font-semibold'>Book an Appointment</motion.button>
              <div className='flex items-center ml-8'>
                <div className='border-2 rounded-xl p-1 border-[#25B4F8]'>
                  <div className='bg-gradient-to-b from-[#FFECC9] to-white text-[#D9B36C] rounded-lg w-12 h-12 flex justify-center items-center'>
                    <FaPhoneVolume className='text-2xl' />
                  </div>
                </div>
                <div className='ml-4'>
                  <p className='text-[#011632] font-semibold'>Call Us Now</p>
                  <p className='text-[#D9B36C] font-bold '>+1 123 456 7890</p>
                </div>
              </div>
            </div>
            {/* profile card */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-96 h-32 rounded-md mt-10 px-4 pt-3 bg-white cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#D9B36C] w-10 h-10 rounded-full'></div>
                  <div>
                    <p className='font-semibold'>Dr. Jane Doe</p>
                    <p className='font-normal'>Dentist</p>
                  </div>
                </div>
                <FaLinkedinIn className='text-2xl text-[#0077B5]' />
              </div>
              <p className='mt-4 text-[#011632] text-sm pl-2 font-medium'>Top Quailty dental treatment done by field experts, Highly Recommended for everyone.</p>
            </motion.div>
          </div>
          <div className='w-1/2'>
            <div className='h-fit relative '>
              {/* <div className={`border-2 border-dashed border-[#D9B36C] w-[590px] h-[590px] rounded-full absolute top-0 right-9`}></div> */}

              <img src={doctora} alt='hero' className='w-[695.43px] g-[676.42px] relative z-10' />

            </div>
          </div>
        </div>

        <div className='flex justify-between items-center h-20 w-full bg-[#E6F6FE]'>
        </div>
      </div>
    </section>
  )
}

export default Hero