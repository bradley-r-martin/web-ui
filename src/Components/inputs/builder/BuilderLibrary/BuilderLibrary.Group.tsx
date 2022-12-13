import React, { FunctionComponent } from 'react'

import { motion } from 'framer-motion'

interface BuilderLibraryGroupProps {
  name: string
  children: React.ReactNode
}

const BuilderLibraryGroup: FunctionComponent<BuilderLibraryGroupProps> = (props) => {
  const { name, children } = props
  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <motion.div variants={variants}>
      <div className='font-semibold text-xs px-4'>{name}:</div>
      <div className='grid grid-cols-4 gap-6 p-4'>{children}</div>
    </motion.div>
  )
}

export default BuilderLibraryGroup
