import React from 'react'
import { motion } from 'framer-motion'

// logo
import logo from '../../images/logo_vitaldental.png'

// react icons, fontawesome 6 icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";


function Footer() {
    return (
        <footer className='w-full flex flex-col items-center  bottom-0'>
            <div className='max-w-screen-2xl w-full pt-4'>
                <nav className='flex justify-between items-center w-full h-24 px-8 border-b-2 border-[#011632]'>
                    <div className='text-2xl font-bold'>
                        <img src={logo} alt="" />
                    </div>
                    <ul className='flex md:gap-8 gap-4 font-medium text-base'>
                        <motion.li whileHover={{ scale: 1.3 }}>
                            <a href='/'>Home</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.3 }}>
                            <a href='/services'>Services</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.3 }}>
                            <a href='/about'>About</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.3 }}>
                            <a href='/contact'>Contact</a>
                        </motion.li>
                    </ul>
                </nav>

                <div className='w-full h-24 flex justify-between items-center '>
                    <p className='text-[#011632] text-sm'>© 2021 All rights reserved</p>
                    {/* socials */}
                    <div className='flex gap-4 '>
                        <div className='flex justify-center items-center h-9 w-9 bg-[#011632] rounded-full'>
                            <FaFacebookF className='text-white ' />
                        </div>
                        <div className='flex justify-center items-center h-9 w-9 bg-[#011632] rounded-full'>
                            <FaInstagram className='text-white ' />
                        </div>
                        <div className='flex justify-center items-center h-9 w-9 bg-[#011632] rounded-full'>
                            <FaLinkedinIn className='text-white ' />
                        </div>
                        <div className='flex justify-center items-center h-9 w-9 bg-[#011632] rounded-full'>
                            <FaYoutube className='text-white ' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-16 bg-[#011632] flex justify-center items-center'>
                <p className='text-white text-sm'>© 2021 All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer