import React from 'react'
//motion framer
import { motion } from 'framer-motion'

// doctora image
import doctora from '../../images/doctora.png'

//icons fa6
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaPhoneVolume } from 'react-icons/fa6'
import { IoIosArrowForward } from "react-icons/io";
import { TbShieldCheck } from "react-icons/tb";

//infinity scroll
import InfinityScroll from '../dynamicComponents/InfinityScroll'

function Hero() {
  return (
    <>
      <section className='w-full flex flex-col justify-center items-center min-h-screen pt-20'>
        <div className='max-w-screen-xl w-full '>
          <div className='flex justify-between items-center pt-10 relative'>
            <div className='w-1/2'>
              <h1 className='text-6xl font-bold tracking-[120%] text-[#011632] absolute z-10'>Get Ready For Your Best <hr /> Ever Dental Experience!</h1>
              <p className='text-lg tracking-[155%] max-w-[537px] mt-32'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
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
                {/* <div className={`border-2 border-dashed border-[#D9B36C] w-[590px] h-[590px] rounded-full absolute  -right-10`}></div> */}

                <img src={doctora} alt='hero' className='w-[695.43px] g-[676.42px] relative z-10 right-10' />

              </div>
            </div>
          </div>

          {/*  */}
          <div className=' flex justify-center items-center gap-6 bg-[#E6F6FE] h-fit py-10 rounded-md'>
            <div className='w-[387PX] h-[300PX] bg-white rounded-md py-6 px-6'>
              <div className='flex justify-center mb-4'>
                <div className='bg-[#D9B36C] w-16 h-16 rounded-full'></div>
              </div>

              <div className='flex justify-center items-center flex-col'>
                <h2 className='text-2xl font-semibold '>
                  Root Canal Treatment
                </h2>
                <p className='text-center mt-4 text-base'>
                  Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.
                </p>
              </div>

              <div className='flex justify-center items-center gap-2 mt-4'>
                <a href="">
                  <p className='text-[#D9B36C] font-semibold'>
                    Learn More
                  </p>
                </a>
                <div className='border-2 rounded-full p-[2px] border-[#D9B36C]'>
                  <IoIosArrowForward className='text-xs text-[#D9B38C]' />
                </div>
              </div>
            </div>
            {/*  */}
            <div className='w-[387PX] h-[300PX] bg-white rounded-md py-6 px-6'>
              <div className='flex justify-center mb-4'>
                <div className='bg-[#D9B36C] w-16 h-16 rounded-full'></div>
              </div>

              <div className='flex justify-center items-center flex-col'>
                <h2 className='text-2xl font-semibold '>
                  Root Canal Treatment
                </h2>
                <p className='text-center mt-4 text-base'>
                  Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.
                </p>
              </div>

              <div className='flex justify-center items-center gap-2 mt-4'>
                <a href="">
                  <p className='text-[#D9B36C] font-semibold'>
                    Learn More
                  </p>
                </a>
                <div className='border-2 rounded-full p-[2px] border-[#D9B36C]'>
                  <IoIosArrowForward className='text-xs text-[#D9B38C]' />
                </div>
              </div>
            </div>
            {/*  */}
            <div className='w-[387PX] h-[300PX] bg-white rounded-md py-6 px-6'>
              <div className='flex justify-center mb-4'>
                <div className='bg-[#D9B36C] w-16 h-16 rounded-full'></div>
              </div>

              <div className='flex justify-center items-center flex-col'>
                <h2 className='text-2xl font-semibold '>
                  Root Canal Treatment
                </h2>
                <p className='text-center mt-4 text-base'>
                  Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.
                </p>
              </div>

              <div className='flex justify-center items-center gap-2 mt-4'>
                <a href="">
                  <p className='text-[#D9B36C] font-semibold'>
                    Learn More
                  </p>
                </a>
                <div className='border-2 rounded-full p-[2px] border-[#D9B36C]'>
                  <IoIosArrowForward className='text-xs text-[#D9B38C]' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className='max-w-screen-xl w-full mb-10'>
          <div className='text-center mt-20 flex flex-col items-center'>
            <h2 className='text-6xl font-semibold text-[#011632] max max-w-screen-lg px-10'>We’re welcoming new patients and can’t wait to meet you.</h2>
            <p className='text-lg mt-4 max-w-screen-sm px-10'>We use to work with most of the health insurance in the country, giving you the best treatment at the lower price, so, what are you waiting to meet us?</p>
          </div>

          <div className='mt-20 py-5 relative'
          >
            <div className='absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-[1]'></div>
            <div className='absolute right-0 w-32 h-full bg-gradient-to-l from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]' />
            <InfinityScroll />
          </div>
        </div>

        {/*  */}
        <div className='max-w-screen-xl w-full'>
          <div className='w-full bg-[#E6F6FE] flex items-center rounded-xl py-10'>
            <div className='w-1/2 pl-16'>
              <div className='w-[414px] h-[414px] flex justify-center items-center'>
                <img src={doctora} alt='hero' className='w-full h-full' />
              </div>
            </div>

            <div className='w-1/2 pl-12 h-full'>
              <h2 className='text-4xl font-semibold text-[#011632]'>Why Choose Smile For All <hr/> Your Dental Treathments?</h2>
              <p className='text-base mt-4 max-w-screen-sm'>We use only the best quality materials on the market in order <hr/> to provide the best products to our patients.</p>
              <ul className='mt-6'>
                <li className='flex gap-2 mt-4'>
                  <TbShieldCheck className='text-2xl text-[#D9B36C]' />
                  <p className='text-base font-medium'>Top quality dental team</p>
                </li>

                <li className='flex gap-2 mt-4'>
                  <TbShieldCheck className='text-2xl text-[#D9B36C]' />
                  <p className='text-base font-medium'>State of the art dental services</p>
                </li>

                <li className='flex gap-2 mt-4'>
                  <TbShieldCheck className='text-2xl text-[#D9B36C]' />
                  <p className='text-base font-medium'>Discount on all dental treatment</p>
                </li>

                <li className='flex gap-2 mt-4'>
                  <TbShieldCheck className='text-2xl text-[#D9B36C]' />
                  <p className='text-base font-medium'>Enrollment is quick and easy</p>
                </li>
              </ul>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='bg-[#D9B36C] text-white w-56 h-12 rounded-lg font-semibold mt-7'>Book an Appointment</motion.button>

            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Hero