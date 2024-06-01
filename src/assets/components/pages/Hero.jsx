import React, { useEffect, useState } from 'react'
//motion framer
import { motion } from 'framer-motion'

// doctora image
import doctora from '../../images/doctora.png'
import dentistInstrument from '../../images/dentist-instruments.jpg'

//icons fa6
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaPhoneVolume } from 'react-icons/fa6'
import { IoIosArrowForward } from "react-icons/io";
import { TbShieldCheck } from "react-icons/tb";

//infinity scroll
import InfinityScroll from '../dynamicComponents/InfinityScroll'

function Hero() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
    , [screenWidth]);

  return (
    <>
      <section className='w-full flex flex-col justify-center items-center min-h-screen pt-20'>
        <div className='max-w-screen-xl w-full '>
          <div className='md:flex justify-between items-center pt-10 md:relative'>
            <div className='lg:w-1/2 px-5'>
              <h1 className='lg:text-6xl text-4xl font-bold tracking-[120%] text-[#011632] md:absolute z-10 '>Get Ready For Your Best {screenWidth > 1024 ? <hr /> : ``} Ever Dental Experience!</h1>
              <p className='text-lg tracking-[155%] max-w-[537px] lg:mt-32 mt-5'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
              <div className='flex mt-7'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='bg-[#D9B36C] text-white rounded-xl p-4  font-semibold'>Book an Appointment</motion.button>
                <div className='flex items-center md:ml-8 ml-2'>
                  <div className='border-2 rounded-xl p-1 border-[#25B4F8]'>
                    <div className='bg-gradient-to-b from-[#FFECC9] to-white text-[#D9B36C] rounded-lg w-9 h-9 md:w-12 md:h-12 flex justify-center items-center'>
                      <FaPhoneVolume className='text-xl md:text-2xl' />
                    </div>
                  </div>
                  <div className='ml-2 md:ml-4 w-full'>
                    <p className='text-[#011632] font-semibold text-sm'>Call Us Now</p>
                    <p className='text-[#D9B36C] font-bold text-sm'>+1 123 456 7890</p>
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
            <div className='lg:w-1/2'>
              <div className='h-fit relative '>
                {/* <div className={`border-2 border-dashed border-[#D9B36C] w-[590px] h-[590px] rounded-full absolute  -right-10`}></div> */}

                <img src={doctora} alt='hero' className='w-[695.43px] g-[676.42px] relative z-10 right-10' />

              </div>
            </div>
          </div>

          {/*  */}
          {/* implements grid layout, its better */}
          <div className=' flex flex-col lg:flex-row justify-center items-center gap-6 bg-[#E6F6FE] h-fit py-10 rounded-md'>
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
        <section className='max-w-screen-xl w-full mb-10'>
          <div className='text-center mt-20 flex flex-col items-center'>
            <h2 className='lg:text-6xl text-4xl font-semibold text-[#011632] max max-w-screen-lg lg:px-10'>We’re welcoming new patients and can’t wait to meet you.</h2>
            <p className='lg:text-lg  mt-4 max-w-screen-sm px-10'>We use to work with most of the health insurance in the country, giving you the best treatment at the lower price, so, what are you waiting to meet us?</p>
          </div>

          <div className='mt-20 py-5 relative'
          >
            <div className='absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-[1]'></div>
            <div className='absolute right-0 w-32 h-full bg-gradient-to-l from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]' />
            <InfinityScroll />
          </div>
        </section>

        {/*  */}
        <section className='max-w-screen-xl w-full'>
          <div className='w-full bg-[#E6F6FE] flex flex-col-reverse lg:flex-row items-center rounded-xl py-10'>
            <div className='lg:w-1/2 lg:pl-16'>
              <div className='w-[414px] h-[414px] flex justify-center items-center bg-red-300 relative md:left-16 overflow-hidden rounded-lg'>
                <img src='https://img.freepik.com/free-photo/male-dentist-examining-young-woman-with-dental-carver-medical-clinic_662251-2587.jpg?w=1380&t=st=1717265517~exp=1717266117~hmac=90c19ea70c10c75afd75e32b9f1168809ffab7bd87ac146d07f1c466e887ce30'
                  alt='hero' className='h-full w-full object-cover transform scale-x-[-1] absolute ' />
              </div>
            </div>

            <div className='lg:w-1/2 lg:pl-12 pl-5 h-full'>
              <h2 className='text-4xl font-semibold text-[#011632]'>Why Choose Smile For All Your Dental Treathments?</h2>
              <p className='text-base mt-4 max-w-screen-sm'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
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
        </section>

        {/*  */}
        <div className='max-w-screen-xl w-full lg:px-20 px-5 mt-32'>
          <div className='flex flex-col-reverse lg:flex-row justify-between'>
            <div className='lg:w-1/2'>
              <h2 className='text-4xl font-semibold text-[#011632]'>Leave your worries at the door and enjoy a healthier, more precise smile</h2>
              <p className='text-base mt-4 max-w-screen-sm'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
            </div>
            <div className='lg:w-1/2 h-[358px] lg:relative flex justify-center'>
              <div className='bg-gradient-to-bl from-[#d9b36cd2] to-white text-[#FFECC9] w-[413px] h-[326.69px] lg:absolute top-0 rounded-md hidden lg:flex'></div>
              <div className='bg-blue-500 w-[410.05px] h-[326.69px] lg:absolute lg:left-10 bottom-10 lg:bottom-0 rounded-md overflow-hidden flex justify-center items-center relative'>
                <img src={dentistInstrument} alt='dentist intrument' className='object-cover h-[500px] absolute left-0 top-0 transform scale-x-[-1]' />
              </div>

            </div>
          </div>
        </div>
        {/*  */}

      </section>

      <section className='w-full mt-20 bg-[#E6F6FE] flex justify-center'>
        <div className='max-w-screen-xl w-full py-10'>
          <div className='flex flex-col items-center '>
            <h2 className='text-4xl font-semibold text-[#011632]'>Meet our specialists</h2>
            <p className='text-base mt-4 max-w-screen-sm text-center'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
          </div>

          <div className='flex justify-center items-center gap-20 my-20'>
            {/*  */}
            <div className='w-72 h-72 bg-white rounded-full flex justify-center items-center relative'>
              {/* linkedin icon */}
              <div className=' rounded-full absolute -top-2 right-3'>
                <FaLinkedinIn className='text-2xl text-[#0077B5]' />
              </div>
              <img src='https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg?t=st=1717267011~exp=1717270611~hmac=2b40f40fdff27aff10a51f49b139114907a5d92c97d56ad4aeb7c9732621df80&w=740'
                alt='doctor' className='w-80 h-[340px] rounded-md object-cover' />

              <div className='flex flex-col items-center justify-center mt-4 absolute bg-gradient-to-r from-[#d9b36c] to-[#ffe4b3] w-[250px] bottom-0 h-[90px] rounded-xl'>
                <p className='text-lg font-semibold'>Dr. Jane Doe</p>
                <p className='text-base font-normal'>Dentist</p>
              </div>
            </div>
            {/*  */}
            <div className='w-72 h-72 bg-white rounded-full flex justify-center items-center relative'>
              {/* linkedin icon */}
              <div className=' rounded-full absolute -top-2 right-3'>
                <FaLinkedinIn className='text-2xl text-[#0077B5]' />
              </div>
              <img src='https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg?t=st=1717267011~exp=1717270611~hmac=2b40f40fdff27aff10a51f49b139114907a5d92c97d56ad4aeb7c9732621df80&w=740'
                alt='doctor' className='w-80 h-[340px] rounded-md object-cover' />

              <div className='flex flex-col items-center justify-center mt-4 absolute bg-gradient-to-r from-[#d9b36c] to-[#ffe4b3] w-[250px] bottom-0 h-[90px] rounded-xl'>
                <p className='text-lg font-semibold'>Dr. Jane Doe</p>
                <p className='text-base font-normal'>Dentist</p>
              </div>
            </div>

            {/*  */}
            <div className='w-72 h-72 bg-white rounded-full flex justify-center items-center relative'>
              {/* linkedin icon */}
              <div className=' rounded-full absolute -top-2 right-3'>
                <FaLinkedinIn className='text-2xl text-[#0077B5]' />
              </div>
              <img src='https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg?t=st=1717267011~exp=1717270611~hmac=2b40f40fdff27aff10a51f49b139114907a5d92c97d56ad4aeb7c9732621df80&w=740'
                alt='doctor' className='w-80 h-[340px] rounded-md object-cover' />

              <div className='flex flex-col items-center justify-center mt-4 absolute bg-gradient-to-r from-[#d9b36c] to-[#ffe4b3] w-[250px] bottom-0 h-[90px] rounded-xl'>
                <p className='text-lg font-semibold'>Dr. Jane Doe</p>
                <p className='text-base font-normal'>Dentist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero