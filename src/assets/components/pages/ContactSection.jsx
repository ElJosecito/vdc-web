import React from 'react'
import { useTranslation } from 'react-i18next'
import LucideIcon from '../ui/LucideIcon'
import PropTypes from 'prop-types'

export default function ContactSection({ contactForm, handleChange, handleSubmit, formStatus }) {
  const { t } = useTranslation()

  return (
    <section className='w-full flex flex-col items-center' id='contact'>
      <div className='max-w-screen-xl w-full py-12 px-3'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-4xl font-semibold text-[#011632]'>{t('contact.title')}</h2>
          <p className='text-base mt-3 max-w-screen-sm'>{t('contact.subtitle')}</p>
        </div>

          <div className='mt-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-start'>
          <form onSubmit={handleSubmit} className='w-full bg-white rounded-md border-2 border-gray-400 p-6 space-y-4 transition-colors duration-150 hover:border-gray-500'>
            {formStatus.error && <p className='text-sm text-red-500'>{t('contactForm.error_required')}</p>}
            {formStatus.submitted && <p className='text-sm text-green-600'>{t('contactForm.success')}</p>}

            <div>
              <label className='text-sm font-medium text-gray-600'>{t('contact.name')}</label>
              <input name='name' value={contactForm.name} onChange={handleChange} className='mt-1 w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D9B36C]' placeholder={t('contactForm.placeholder_name')} aria-label='Name' />
            </div>

            <div>
              <label className='text-sm font-medium text-gray-600'>{t('contact.email')}</label>
              <input name='email' value={contactForm.email} onChange={handleChange} className='mt-1 w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D9B36C]' placeholder={t('contactForm.placeholder_email')} aria-label='Email' />
            </div>

            <div>
              <label className='text-sm font-medium text-gray-600'>{t('contact.message')}</label>
              <textarea name='message' value={contactForm.message} onChange={handleChange} rows='4' className='mt-1 w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D9B36C]' placeholder={t('contactForm.placeholder_message')} aria-label='Message' />
            </div>

            <div className='flex items-center gap-4'>
              <button type='submit' className='bg-[#D9B36C] text-white rounded-md px-5 py-2 font-semibold hover:scale-105 transition'>{t('contactForm.send')}</button>
              <a href='tel:+11234567890' className='text-[#011632] flex items-center gap-2 font-medium'><LucideIcon name='PhoneCall' size={18} /> {t('contactForm.call')}</a>
            </div>
          </form>

            <div className='w-full flex flex-col gap-4'>
            <div className='bg-white rounded-md border-2 border-gray-400 p-4 flex items-start gap-4 transition-colors duration-150 hover:border-gray-500'>
              <div className='bg-[#D9B36C] p-3 rounded-md'><LucideIcon name='MapPin' size={18} className='text-white' /></div>
              <div>
                <p className='text-sm text-gray-500'>{t('contact.addressTitle')}</p>
                <p className='font-semibold text-[#011632]'>{t('contact.address')}</p>
              </div>
            </div>

            <div className='bg-white rounded-md border-2 border-gray-400 p-4 flex items-start gap-4 transition-colors duration-150 hover:border-gray-500'>
              <div className='bg-[#D9B36C] p-3 rounded-md'><LucideIcon name='Clock' size={18} className='text-white' /></div>
              <div>
                <p className='text-sm text-gray-500'>{t('contact.hoursTitle')}</p>
                <p className='font-semibold text-[#011632]'>{t('contact.hours')}</p>
              </div>
            </div>

            <div className='bg-white rounded-md border-2 border-gray-400 p-4 flex items-start gap-4 transition-colors duration-150 hover:border-gray-500'>
              <div className='bg-[#D9B36C] p-3 rounded-md'><LucideIcon name='MessageCircle' size={18} className='text-white' /></div>
              <div>
                <p className='text-sm text-gray-500'>{t('contact.liveChat')}</p>
                <p className='font-semibold'>{t('contactForm.liveChatSubtitle')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mt-10'>
          <iframe title='clinic-location' className='w-full h-64 md:h-96 rounded-md border-0' loading='lazy' src='https://maps.google.com/maps?q=1441%20Morris%20Ave%20Union%20NJ%2007083&output=embed' />
        </div>
      </div>
    </section>
  )
}

ContactSection.propTypes = {
  contactForm: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formStatus: PropTypes.object.isRequired
}
