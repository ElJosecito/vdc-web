import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LucideIcon from '../ui/LucideIcon'
import doctora from '../../images/doctora.png'
import PropTypes from 'prop-types'

export default function HeroTop({ screenWidth }) {
  const { t } = useTranslation()

  return (
    <div className='md:flex justify-between items-center pt-10 md:relative'>
      <div className='lg:w-1/2 px-5'>
        <h1 className='lg:text-6xl text-4xl font-bold text-[#011632] md:absolute z-10 '>
          {t('hero.title').split(' ').slice(0, 5).join(' ')} {screenWidth > 769 ? <br /> : null} {t('hero.title').split(' ').slice(6).join(' ')}
        </h1>
        <p className='text-lg max-w-[537px] lg:mt-32 md:mt-24 mt-5'>{t('hero.subtitle')}</p>
        <div className='flex mt-7'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='bg-[#D9B36C] text-white rounded-xl p-4 font-semibold'>{t('hero.bookAppointment')}</motion.button>
          <div className='flex items-center md:ml-8 ml-2'>
            <div className='border-2 rounded-xl p-1 border-[#25B4F8]'>
              <div className='bg-gradient-to-b from-[#FFECC9] to-white text-[#D9B36C] rounded-lg w-9 h-9 md:w-12 md:h-12 flex justify-center items-center'>
                <LucideIcon name='PhoneCall' size={20} className='text-[#D9B36C]' />
              </div>
            </div>
            <div className='ml-2 md:ml-4 w-full'>
              <p className='text-[#011632] font-semibold text-sm'>{t('hero.callUsNow')}</p>
              <p className='text-[#D9B36C] font-bold text-sm'>+1 123 456 7890</p>
            </div>
          </div>
        </div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-full md:w-96 min-h-32 rounded-md mt-10 px-4 py-3 bg-white cursor-pointer border-2 border-gray-100 transition-colors duration-150 hover:border-gray-200'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
              <div className='bg-[#D9B36C] w-10 h-10 rounded-full'>
                <img src='https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg' alt='dentist' className='w-full h-full object-cover rounded-full' />
              </div>
              <div>
                <p className='font-semibold'>{t('profile.name')}</p>
                <p className='font-normal'>{t('profile.role')}</p>
              </div>
            </div>
            <LucideIcon name='Linkedin' size={20} className='text-[#0077B5]' />
          </div>
          <p className='mt-4 text-[#011632] text-sm pl-2 font-medium'>{t('profile.note')}</p>
        </motion.div>
      </div>

      <div className='lg:w-1/2'>
        <div className='h-fit relative mt-10 md:mt-0'>
          <img src={doctora} alt='hero' className='w-[695.43px] g-[676.42px] relative z-10 right-10' />
        </div>
      </div>
    </div>
  )
}

HeroTop.propTypes = {
  screenWidth: PropTypes.number
}
