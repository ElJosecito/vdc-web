import React from 'react'
import { useTranslation } from 'react-i18next'
import { IoIosArrowForward } from 'react-icons/io'
import tooth from '../../images/icons/tooth.svg'
import smile from '../../images/icons/smile.svg'
import implant from '../../images/icons/implant.svg'

export default function Services() {
  const { t } = useTranslation()

  return (
    <div className=' flex flex-col lg:flex-row justify-center items-stretch gap-6 bg-bg-light h-fit py-10 rounded-md' id='services'>
  <div className='w-full lg:w-[387px] h-[320px] bg-white rounded-md py-6 px-6 flex flex-col border border-gray-200 transition-colors duration-150 hover:border-gray-300'>
        <div className='flex justify-center mb-4'>
          <div className='bg-primary w-16 h-16 rounded-full flex justify-center items-center'>
            <img src={tooth} alt='tooth' className='w-12 h-12 ' />
          </div>
        </div>

  <div className='flex flex-col justify-center items-center flex-1'>
          <h2 className='text-2xl font-semibold '>
            {t('services.card1.title')}
          </h2>
          <p className='text-center mt-4 text-base'>
            {t('services.card1.desc')}
          </p>
        </div>

  <div className='flex justify-center items-center gap-2 mt-auto'>
          <a href="">
            <p className='text-primary font-semibold'>
              {t('services.learnMore')}
            </p>
          </a>
      <div className='border-2 rounded-full p-[2px] border-primary'>
            <IoIosArrowForward className='text-xs text-primary-variant' />
          </div>
        </div>
      </div>

  <div className='w-full lg:w-[387px] h-[320px] bg-white rounded-md py-6 px-6 flex flex-col border border-gray-200 transition-colors duration-150 hover:border-gray-300'>
        <div className='flex justify-center mb-4'>
          <div className='bg-primary w-16 h-16 rounded-full flex justify-center items-center'>
            <img src={smile} alt='smile' className='w-12 h-12' />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center flex-1'>
          <h2 className='text-2xl font-semibold '>
            {t('services.card2.title')}
          </h2>
          <p className='text-center mt-4 text-base'>
            {t('services.card2.desc')}
          </p>
        </div>

  <div className='flex justify-center items-center gap-2 mt-auto'>
          <a href="">
            <p className='text-primary font-semibold'>
              {t('services.learnMore')}
            </p>
          </a>
      <div className='border-2 rounded-full p-[2px] border-primary'>
            <IoIosArrowForward className='text-xs text-primary-variant' />
          </div>
        </div>
      </div>

  <div className='w-full lg:w-[387px] h-[320px] bg-white rounded-md py-6 px-6 flex flex-col border border-gray-200 transition-colors duration-150 hover:border-gray-300'>
        <div className='flex justify-center mb-4'>
          <div className='bg-primary w-16 h-16 rounded-full flex justify-center items-center'>
            <img src={implant} alt='implant' className='w-12 h-12' />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center flex-1'>
          <h2 className='text-2xl font-semibold '>
            {t('services.card3.title')}
          </h2>
          <p className='text-center mt-4 text-base'>
            {t('services.card3.desc')}
          </p>
        </div>

  <div className='flex justify-center items-center gap-2 mt-auto'>
          <a href="">
            <p className='text-primary font-semibold'>
              {t('services.learnMore')}
            </p>
          </a>
          <div className='border-2 rounded-full p-[2px] border-primary'>
            <IoIosArrowForward className='text-xs text-primary-variant' />
          </div>
        </div>
      </div>
    </div>
  )
}
