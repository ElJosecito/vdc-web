import React from 'react'

function Header() {
    return (
        <header className='w-full flex justify-center fixed'>
            <div className='max-w-screen-2xl w-full pt-4'>
                <nav className='flex justify-between items-center w-full h-24 bg-[#E6F6FE] px-8 rounded-md'>
                    <div className='text-2xl font-bold'>Logo</div>
                    <ul className='flex gap-8 font-semibold'>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/about'>About</a>
                        </li>
                        <li>
                            <a href='/contact'>Contact</a>
                        </li>
                    </ul>
                    <button className='bg-[#D9B36C] text-white w-36 py-4 rounded-md font-bold'>Book Now</button>
                </nav>
            </div>
        </header>
    )
}

export default Header