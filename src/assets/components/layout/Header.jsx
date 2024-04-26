import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Header() {

    const [scroll, setScroll] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    })



    return (
        <header className='w-full flex justify-center fixed z-50 '>
            <div className='max-w-screen-2xl w-full pt-4 '>
                <nav className={`flex justify-between items-center w-full h-20 px-8 rounded-md backdrop-blur-lg transition-all duration-500  ${scroll ? 'bg-[#e6f6feee] shadow-sm' : 'bg-transparent'}`}>
                    <div className='text-2xl font-bold'>Logo</div>
                    <ul className='flex gap-8 font-semibold text-base'>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm'>
                            <a href='/'>Home</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm'>
                            <a href='/services'>Services</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm'>
                            <a href='/about'>About</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm'>
                            <a href='/contact'>Contact</a>
                        </motion.li>
                    </ul>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='bg-[#D9B36C] text-white px-8 py-4 text-sm rounded-xl font-semibold'>Book Now</motion.button>
                </nav>
            </div>
        </header>
    )
}

export default Header