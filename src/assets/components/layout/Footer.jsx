import React from 'react'
import { motion } from 'framer-motion'
import '../../../i18n'
import { useTranslation } from 'react-i18next'

// logo removed

// react icons, fontawesome 6 icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";


function Footer() {
    const { t } = useTranslation()
    return (
        <footer className='w-full flex flex-col items-center  bottom-0'>
            <div className='max-w-screen-2xl w-full pt-4'>
                <nav className='flex justify-between items-center w-full h-24 px-8 border-b-2 border-brand'>
                    <div className='text-2xl font-bold'>
                        {/* render brand only if set */}
                        {t('header.brand') ? <h1 className='text-brand'>{t('header.brand')}</h1> : null}
                    </div>
                    <ul className='flex md:gap-8 gap-4 font-medium text-base'>
                        <motion.li whileHover={{ scale: 1.3 }}>
                            <a href='/'>{t('footer.links.home')}</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.3 }}>
                            <a href='/services'>{t('footer.links.services')}</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.3 }}>
                            <a href='/about'>{t('footer.links.about')}</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.3 }}>
                            <a href='/contact'>{t('footer.links.contact')}</a>
                        </motion.li>
                    </ul>
                </nav>

                <div className='w-full h-24 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center md:gap-4 my-8 px-5'>
                    <p className='text-brand text-sm py-3'>{t('footer.copy')}</p>
                    {/* socials */}
                    <div className='flex gap-4 '>
                        <div className='flex justify-center items-center h-9 w-9 bg-brand rounded-full'>
                            <FaFacebookF className='text-white ' />
                        </div>
                        <div className='flex justify-center items-center h-9 w-9 bg-brand rounded-full'>
                            <FaInstagram className='text-white ' />
                        </div>
                        <div className='flex justify-center items-center h-9 w-9 bg-brand rounded-full'>
                            <FaLinkedinIn className='text-white ' />
                        </div>
                        <div className='flex justify-center items-center h-9 w-9 bg-brand rounded-full'>
                            <FaYoutube className='text-white ' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-16 bg-brand flex justify-center items-center'>
                <p className='text-white text-sm'>{t('footer.copy')}</p>
            </div>
        </footer>
    )
}

export default Footer