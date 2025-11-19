import React from 'react'
import { useTranslation } from 'react-i18next'
import { BsStarFill } from 'react-icons/bs'
import PropTypes from 'prop-types'

export default function Testimonials({ testimonials }) {
  const { t } = useTranslation()

  return (
    <section className='w-full flex justify-center'>
      <div className='max-w-screen-xl w-full py-20'>
        <section className='max-w-screen-xl w-full'>
          <div className='flex flex-col items-center'>
            <h2 className='text-4xl font-semibold text-brand text-center md-text-start'>{t('testimonials.title')}</h2>
            <p className='text-base mt-4 max-w-screen-sm text-center px-3'>{t('testimonials.subtitle')}</p>
          </div>

          <div className='flex flex-col lg:flex-row justify-center items-center gap-10 my-20 px-5'>
            {testimonials.map((item) => (
              <div key={item.id} className='md:w-[413px] md:h-[290px] rounded-lg flex flex-col justify-center items-start relative bg-white p-5 px-7 border border-gray-200 transition-colors duration-150 hover:border-gray-300'>
                <div className='flex gap-4'>
                  <div className='bg-primary w-16 h-16 rounded-full overflow-hidden'>
                    <img src={item.img} alt={item.author} className='w-full h-full object-cover rounded-full' />
                  </div>

                  <div className=''>
                    <p className='text-brand text-base font-semibold mt-4'>{item.author}</p>
                    <div className='flex justify-center items-center gap-2'>
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <BsStarFill key={i} className='text-primary' />
                      ))}
                    </div>
                  </div>
                </div>
                <p className='text-brand text-base pr-8 mt-4'>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.array.isRequired
}
