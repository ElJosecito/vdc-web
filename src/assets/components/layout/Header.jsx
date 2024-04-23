import React from 'react'

function Header() {
    return (
        <header className='w-full flex justify-center fixed'>
            <div className='max-w-screen-2xl w-full pt-4'>
                <nav className='flex justify-between items-center w-full h-24 bg-[#E6F6FE] px-8 rounded-md'>
                    <div className='text-2xl font-bold'>Logo</div>
                    <ul className='flex gap-8 font-semibold text-base'>
                        <li className='hover:scale-125 transition-all duration-200'>
                            <a href='/'>Home</a>
                        </li>
                        <li className='hover:scale-125 transition-all duration-200'>
                            <a href='/services'>Services</a>
                        </li>
                        <li className='hover:scale-125 transition-all duration-200'>
                            <a href='/about'>About</a>
                        </li>
                        <li className='hover:scale-125 transition-all duration-200'>
                            <a href='/contact'>Contact</a>
                        </li>
                    </ul>
                    <button className='bg-[#D9B36C] text-white w-36 py-4 rounded-xl font-semibold'>Book Now</button>
                </nav>
            </div>
        </header>
    )
}

export default Header