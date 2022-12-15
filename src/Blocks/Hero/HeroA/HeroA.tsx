import React, { FunctionComponent } from 'react'

import { HeroAProps } from './HeroA.Definition'

const HeroA: FunctionComponent<HeroAProps> = (props) => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            {props.title}
            <br className='hidden lg:inline-block' />
          </h1>
          <p className='mb-8 leading-relaxed'>{props.content}</p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Button
            </button>
            <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
              Button
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src='https://dummyimage.com/720x600'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroA
