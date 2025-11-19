import React, { useEffect, useState } from 'react'
import '../../../i18n'
import { useTranslation } from 'react-i18next'

//motion framer
import { motion } from 'framer-motion'

// doctora image
import dentistInstrument from '../../images/dentist-instruments.jpg'

// LucideIcon is used in child components; keep import in those files instead
import { TbShieldCheck } from "react-icons/tb";

// star icon
// star icon (moved to Testimonials component)
// star icon moved to Testimonials component

//infinity scroll
import InfinityScroll from '../dynamicComponents/InfinityScroll'

//QuestionsSqare
import QuestionsSqare from '../staticComponets/QuestionsSqare'

// mapComponent
// MapComponent removed in favor of Google Maps iframe embed

import HeroTop from './HeroTop'
import Services from './Services'
import Specialists from './Specialists'
import Testimonials from './Testimonials'
import ContactSection from './ContactSection'

function Hero() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
    , [screenWidth]);

  // Contact form state & handlers
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: '' });

  const { t } = useTranslation()

  // Doctors and testimonials data (use t() for translatable fields)
  const doctors = [
    {
      id: 1,
      img: 'https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg',
      name: t('specialists.doctors.0.name'),
      role: t('specialists.doctors.0.role'),
      linkedin: ''
    },
    {
      id: 2,
      // use a random adult portrait (public placeholder)
      img: 'https://img.freepik.com/free-photo/cheerful-female-dentist-smiling_329181-10340.jpg',
      name: t('specialists.doctors.1.name'),
      role: t('specialists.doctors.1.role'),
      linkedin: ''
    },
    {
      id: 3,
      img: 'https://img.freepik.com/free-photo/cheerful-female-dentist-smiling_329181-10324.jpg',
      name: t('specialists.doctors.2.name'),
      role: t('specialists.doctors.2.role'),
      linkedin: ''
    }
  ]

  const testimonials = [
    {
      id: 1,
      img: dentistInstrument,
      author: t('testimonials.items.0.author'),
      text: t('testimonials.items.0.text'),
      stars: 5
    },
    {
      id: 2,
      img: dentistInstrument,
      author: t('testimonials.items.1.author'),
      text: t('testimonials.items.1.text'),
      stars: 5
    },
    {
      id: 3,
      img: dentistInstrument,
      author: t('testimonials.items.2.author'),
      text: t('testimonials.items.2.text'),
      stars: 5
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setFormStatus({ submitted: false, error: 'Please fill in all fields' });
      return;
    }

    // Simulate submit (replace with real API call as needed)
    setFormStatus({ submitted: true, error: '' });
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus({ submitted: false, error: '' }), 4000);
  };

  return (
    <>
      <section className='w-full flex flex-col justify-center items-center min-h-screen pt-20' id='home'>
        <div className='max-w-screen-xl w-full '>
          <HeroTop screenWidth={screenWidth} />

          {/*  */}
          {/* implements grid layout, its better */}
          <Services />
        </div>

        {/*  */}
        <section className='max-w-screen-xl w-full mb-10' id='about'>
          <div className='text-center mt-20 flex flex-col items-center'>
            <h2 className='lg:text-6xl text-4xl font-semibold text-brand max max-w-screen-lg lg:px-10'>{t('about.welcomeTitle')}</h2>
            <p className='lg:text-lg  mt-4 max-w-screen-sm px-10'>{t('about.welcomeText')}</p>
          </div>

          <div className='mt-20 py-5 relative'
          >
            <div className='absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-[1]'></div>
            <div className='absolute right-0 w-32 h-full bg-gradient-to-l from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]' />
            <InfinityScroll />
          </div>
        </section>

        {/*  */}
        <section className='max-w-screen-xl w-full'>
          <div className='w-full bg-bg-light flex flex-col-reverse lg:flex-row items-start rounded-xl py-10'>
            <div className='lg:w-1/2 lg:pl-16 pl-5'>
              <div className='lg:w-[414px] lg:max-h-[414px] w-[300px] h-[300px] flex items-center bg-red-300 relative lg:left-16 overflow-hidden rounded-lg mt-10 lg:mt-0'>
                <img src='https://img.freepik.com/free-photo/male-dentist-examining-young-woman-with-dental-carver-medical-clinic_662251-2587.jpg?w=1380&t=st=1717265517~exp=1717266117~hmac=90c19ea70c10c75afd75e32b9f1168809ffab7bd87ac146d07f1c466e887ce30'
                  alt='hero' className='h-full w-full object-cover transform scale-x-[-1] absolute ' />
              </div>
            </div>

            <div className='lg:w-1/2 lg:pl-12 pl-5 h-full'>
              <h2 className='text-4xl font-semibold text-brand'>{t('why.title')}</h2>
              <p className='text-base mt-4 max-w-screen-sm'>{t('why.desc')}</p>
              <ul className='mt-6'>
                <li className='flex gap-2 mt-4'>
                  <TbShieldCheck className='text-2xl text-primary' />
                  <p className='text-base font-medium'>{t('why.item1')}</p>
                </li>

                <li className='flex gap-2 mt-4'>
                  <TbShieldCheck className='text-2xl text-primary' />
                  <p className='text-base font-medium'>{t('why.item2')}</p>
                </li>

                <li className='flex gap-2 mt-4'>
                  <TbShieldCheck className='text-2xl text-primary' />
                  <p className='text-base font-medium'>{t('why.item3')}</p>
                </li>

                <li className='flex gap-2 mt-4'>
                  <TbShieldCheck className='text-2xl text-primary' />
                  <p className='text-base font-medium'>{t('why.item4')}</p>
                </li>
              </ul>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='bg-primary text-white w-56 h-12 rounded-lg font-semibold mt-7'>{t('why.cta')}</motion.button>
            </div>
          </div>
        </section>

        {/*  */}
        <div className='max-w-screen-xl w-full lg:px-20 px-5 mt-32'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-1/2'>
              <h2 className='text-4xl font-semibold text-brand text-center lg:text-start'>{t('tagline.title')}</h2>
              <p className='text-base mt-4 lg:max-w-screen-sm text-center lg:text-start'>{t('tagline.text')}</p>
            </div>
            <div className='lg:w-1/2 h-[358px] lg:relative flex justify-center'>
              <div className='bg-gradient-to-bl from-[rgba(217,179,108,0.82)] to-white text-accent w-[413px] h-[326.69px] lg:absolute top-0 rounded-md hidden lg:flex'></div>
              <div className='bg-blue-500 w-[410.05px] h-[326.69px] lg:absolute lg:left-10 bottom-10 lg:bottom-0 rounded-md overflow-hidden flex justify-center items-center relative mt-14 lg:mt-0'>
                <img src={dentistInstrument} alt='dentist intrument' className='object-cover h-[500px] absolute left-0 top-0 transform scale-x-[-1]' />
              </div>

            </div>
          </div>
        </div>
        {/*  */}


      </section>

      <Specialists doctors={doctors} />

      {/*  */}
      <section className='w-full flex justify-center'>
        <div className='max-w-screen-xl w-full py-20'>
          <section className='max-w-screen-xl w-full'>
            <Testimonials testimonials={testimonials} />
          </section>
        </div>
      </section>



      <section className='w-full flex justify-center'>
        <div className='max-w-screen-xl w-full pb-20'>
          <div className='flex flex-col items-center'>
            <h2 className='text-5xl font-semibold text-center lg:text-start'>{t('faq.title')}</h2>
            <p className='text-base mt-4 max-w-screen-sm text-center '>{t('faq.subtitle')}</p>
          </div>

          <div className='flex flex-col lg:flex-row justify-center items-center mt-10 px-3'>
            <QuestionsSqare />
          </div>

        </div>
      </section>

      <section className='w-full flex justify-center'>
        <div className='max-w-screen-lg min-h-96 h-fit w-full rounded-lg bg-muted px-7 py-10 flex flex-col md:flex-row items-start md:items-center justify-between'>
          
            <div className='flex flex-col items-start md:w-2/4'>
            <h2 className='text-4xl font-semibold text-white text-start'>{t('footerCta.title')}</h2>
            <p className='text-base mt-4 max-w-screen-sm text-start text-white'>{t('footerCta.text')}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='bg-primary text-white w-56 h-12 rounded-lg font-semibold mt-7'>
              {t('footerCta.cta')}
            </motion.button>
          </div>

          {/* img */}
          <div className='md:w-2/4 flex justify-start md:justify-end items-center'>
            <div className='max-w-80 max-h-80 w-full h-full rounded-md flex justify-center items-center overflow-hidden mt-7'>
              <img src={dentistInstrument} alt='dentist intrument' className='w-full h-full object-cover ' />
            </div>
          </div>
        </div>
      </section>

      <ContactSection contactForm={contactForm} handleChange={handleChange} handleSubmit={handleSubmit} formStatus={formStatus} />
    </>
  )
}

export default Hero