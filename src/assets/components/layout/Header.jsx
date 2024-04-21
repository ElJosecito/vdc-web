import React from 'react'

function Header() {
  return (
    <header className='w-full flex justify-center '>
        <div className='max-w-screen-2xl w-full'>
            <nav className='flex justify-between items-center w-full'>
                <div className='text-2xl font-bold'>Logo</div>
                <ul className='flex gap-4'>
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
                <div>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Book Now</button>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header