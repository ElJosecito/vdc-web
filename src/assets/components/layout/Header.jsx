import React from 'react'
import { motion } from 'framer-motion'

function Header() {
    return (
        <header className='w-full flex justify-center fixed'>
            <div className='max-w-screen-2xl w-full pt-4'>
                <nav className='flex justify-between items-center w-full h-24 bg-[#E6F6FE] px-8 rounded-md'>
                    <div className='text-2xl font-bold'>Logo</div>
                    <ul className='flex gap-8 font-semibold text-base'>
                        <motion.li whileHover={{ scale: 1.5 }}>
                            <a href='/'>Home</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }}>
                            <a href='/services'>Services</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }}>
                            <a href='/about'>About</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }}>
                            <a href='/contact'>Contact</a>
                        </motion.li>
                    </ul>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='bg-[#D9B36C] text-white w-36 py-4 rounded-xl font-semibold'>Book Now</motion.button>
                </nav>
            </div>
        </header>
    )
}

export default Header