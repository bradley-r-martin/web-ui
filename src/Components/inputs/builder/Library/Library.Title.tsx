import React, { FunctionComponent } from 'react'

import { BuildingLibraryIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LibraryTitleProps {}

const LibraryTitle: FunctionComponent<LibraryTitleProps> = () => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <motion.div
      variants={variants}
      className='flex items-center space-x-3 text-slate-600 p-4 px-24'
    >
      <BuildingLibraryIcon className='h-6 w-6' />
      <div className='text-xl font-light'>Block library</div>
    </motion.div>
  )
}

export default LibraryTitle
