import React, { FunctionComponent } from 'react'

import { CtaBProps } from './CtaB.Definition'

const CtaB: FunctionComponent<CtaBProps> = (props) => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex items-center md:flex-row flex-col'>
        <div className='flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center'>
          <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font mb-1'>
            ROOF PARTY POLAROID
          </h2>
          <h1 className='md:text-3xl text-2xl font-medium title-font text-gray-900'>
            {props.title}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default CtaB
