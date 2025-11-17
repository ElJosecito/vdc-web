import React, { useState } from 'react'
import '../../../i18n'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// logo vital dental center
// logo removed: not used

// icons
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {

    const { t, i18n } = useTranslation()

    const [scroll, setScroll] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 70) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    })


    // mobile menu
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }


    // display mobile menu
    const mobileMenu = menu ? 'flex' : 'hidden'



    return (
        <header className='w-full flex justify-center fixed z-[10000] '>
            <div className='max-w-[1350px] w-full lg:pt-3 pt-0 md:px-3 px-0'>
                <nav className={`flex justify-between items-center w-full h-20 px-8 rounded-md backdrop-blur-lg transition-all duration-500  ${scroll ? 'bg-[#E6F6FE] shadow-lg' : 'bg-transparent'}`}>
                    <div className='text-2xl font-bold'>
                        {/* <img src={logo} alt="" /> */}
                        <h1 className='text-[#D9B36C]'>{t('header.brand')}</h1>
                    </div>
                    <ul className='lg:flex gap-8 font-semibold text-base hidden'>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm'>
                            <a href='/#'>{t('header.home')}</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm'>
                            <a href='#services'>{t('header.services')}</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm'>
                            <a href='#about'>{t('header.about')}</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm'>
                            <a href='#contact'>{t('header.contact')}</a>
                        </motion.li>
                    </ul>

                                                                                <div className='hidden lg:flex items-center gap-4'>
                                                                                    <LanguageSwitcher i18n={i18n} />
                                                                                    <motion.button
                                                                                        whileHover={{ scale: 1.1 }}
                                                                                        whileTap={{ scale: 0.9 }}
                                                                                        className='bg-[#D9B36C] text-white px-8 py-4 text-sm rounded-xl font-semibold'>
                                                                                        {t('header.bookNow')}
                                                                                    </motion.button>
                                                                                </div>

                    {/* mobile menu */}
                    <div className='lg:hidden flex items-center'>
                        <button onClick={handleMenu} className='text-2xl'>
                            {menu ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    <ul className={`flex flex-col gap-8 font-semibold text-base ${mobileMenu} lg:hidden absolute top-20 left-0 right-0 ${scroll ? 'bg-[#E6F6FE] shadow-lg' : 'bg-white'} rounded-md shadow-lg p-8 transition-all duration-500`}>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm' onClick={handleMenu}>
                            <a href='/#'>{t('header.home')}</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm' onClick={handleMenu}>
                            <a href='#services'>{t('header.services')}</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm' onClick={handleMenu}>
                            <a href='#about'>{t('header.about')}</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5 }} className='text-sm' onClick={handleMenu}>
                            <a href='#contact'>{t('header.contact')}</a>
                        </motion.li>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='bg-[#D9B36C] text-white px-8 py-4 text-sm rounded-xl font-semibold'>
                            {t('header.bookNow')}
                        </motion.button>
                                                {/* mobile language selector */}
                                                <div className='flex items-center gap-2'>
                                                    <button onClick={() => { i18n.changeLanguage('en'); localStorage.setItem('lng','en'); setMenu(false); }} className='text-sm px-2 py-1 rounded-md hover:bg-gray-100'>{t('header.lang_en')}</button>
                                                    <button onClick={() => { i18n.changeLanguage('es'); localStorage.setItem('lng','es'); setMenu(false); }} className='text-sm px-2 py-1 rounded-md hover:bg-gray-100'>{t('header.lang_es')}</button>
                                                </div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

function LanguageSwitcher({ i18n }) {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        function onDoc(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener('click', onDoc)
        return () => document.removeEventListener('click', onDoc)
    }, [])

        const current = (i18n && i18n.language) || (typeof window !== 'undefined' && localStorage.getItem('lng')) || 'en'

    const handleChange = (lng) => {
        i18n.changeLanguage(lng)
        if (typeof window !== 'undefined') localStorage.setItem('lng', lng)
        setOpen(false)
    }

    return (
        <div ref={ref} className='hidden lg:flex relative items-center ml-4'>
            <button onClick={() => setOpen(o => !o)} className='flex items-center gap-2 px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-100'>
                {current === 'es' ? 'ES' : 'EN'}
                <svg className='w-4 h-4' viewBox='0 0 20 20' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z' clipRule='evenodd'/></svg>
            </button>
            {open && (
                <div className='absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-1 w-36'>
                    <button onClick={() => handleChange('en')} className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${current === 'en' ? 'font-semibold' : ''}`}>English</button>
                    <button onClick={() => handleChange('es')} className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${current === 'es' ? 'font-semibold' : ''}`}>Español</button>
                </div>
            )}
        </div>
    )
}

LanguageSwitcher.propTypes = {
    i18n: PropTypes.object.isRequired
}