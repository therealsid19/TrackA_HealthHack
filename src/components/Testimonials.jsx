import React from 'react'
import manImg from '../assets/doctor.png'
import {AiFillStar} from 'react-icons/ai'

const Testimonials = () => {
  return (
    <div name='Testimonials' className='p-2 w-full h-full md:p-10 flex flex-col items-center flex-wrap'>
      <h3 className='text-sm md:text-[16px] border-b-4 border-b-indigo-500 mb-2 w-fit'>Testimonials</h3>
      <h1 className='text-2xl md:text-4xl mb-4'>We Value Your Heath</h1>

      <div className='grid md:grid-cols-4 relative bg-gradient-to-r from-indigo-500
       to-indigo-900 w-[94%] h-3/4 rounded-lg mt-5'>
        <div className='col-span-3 text-white p-6 md:p-16'>
         <p className='text-[13px] text-justify md:text-md w-full md:w-4/6'>
         I can't say enough about my experience with Dr. Dave and his staff. Over the years, removal procedures and have had wonderful results every time. Dave has always been great about explaining procedures and has helped manage my expectations in terms of results. He's meticulous in his work and it shows. I love that he is up to date on the latest techniques and technology and is often involved in (if not the creator of) innovations within the field
         </p>

         <div className='flex mt-5'>
         <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
         </div>
         <h3 className='mt-2 mb-7'>John Doe</h3>
         <button className='mt-2 border-2  py-2 px-3 rounded-md hover:bg-slate-200 hover:text-indigo-900 ease-in-out duration-500'>Schedule Your Consultation</button>


        </div>

        <div className='hidden md:block'>
        <img className='md:h-[500px] absolute md:right-5 lg:right-15 bottom-0 object-cover lg:h-[620px] ' src={manImg} alt='img'/>
        <p className='hidden lg:block text-indigo-900 bg-white/90 rounded-md p-3 absolute right-[420px] bottom-32'>Hi , I'm Dr Dave</p>
        </div>
      </div>
</div>
  )
}

export default Testimonials