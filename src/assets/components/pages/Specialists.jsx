import React from 'react'
import LucideIcon from '../ui/LucideIcon'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

export default function Specialists({ doctors }) {
  const { t } = useTranslation()

  return (
    <section className='w-full mt-20 bg-bg-light flex justify-center'>
      <div className='max-w-screen-xl w-full py-10'>
        <div className='flex flex-col items-center '>
          <h2 className='text-4xl font-semibold text-brand'>{t('specialists.title')}</h2>
          <p className='text-base mt-4 max-w-screen-sm text-center px-3'>{t('specialists.subtitle')}</p>
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-8 my-20'>
          {doctors.map((doc) => (
            <div key={doc.id} className='w-full lg:w-[280px] h-[380px] bg-white rounded-md overflow-hidden flex flex-col relative border border-gray-200 transition-colors duration-150 hover:border-gray-300'>
              <div className='absolute top-3 right-3 z-10'>
                <LucideIcon name='Linkedin' size={20} className='text-social-blue' />
              </div>

              <div className='w-full h-64'>
                <img src={doc.img} alt={doc.name} className='w-full h-full object-cover' />
              </div>

              <div className='p-4 flex-1 flex flex-col justify-end items-center bg-gradient-to-r from-primary to-accent-2'>
                <p className='text-lg font-semibold text-brand'>{doc.name}</p>
                <p className='text-base font-normal text-brand'>{doc.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

Specialists.propTypes = {
  doctors: PropTypes.array.isRequired
}
