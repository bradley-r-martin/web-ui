import React, { FunctionComponent } from 'react'

import { NProgress } from '@tanem/react-nprogress'
import { motion } from 'framer-motion'

interface LoadingBarProps {
  loading?: boolean
  children?: React.ReactNode
}

const LoadingBar: FunctionComponent<LoadingBarProps> = (props) => {
  const { loading, children } = props
  return (
    <div className='relative overflow-hidden'>
      <NProgress isAnimating={loading}>
        {({ animationDuration, isFinished, progress }) => (
          <div
            style={{
              opacity: isFinished ? 0 : 1,
              pointerEvents: 'none',
              transition: `opacity ${animationDuration}ms linear`,
            }}
          >
            <div
              style={{
                height: 2,
                left: 0,
                marginLeft: `${(-1 + progress) * 100}%`,
                position: 'absolute',
                top: 0,
                transition: `margin-left ${animationDuration}ms linear`,
                width: '100%',
              }}
              className='bg-sky-500'
            >
              <div
                className='shadow-sky-300'
                style={{
                  boxShadow: '0 0 10px var(--tw-shadow-color), 0 0 5px var(--tw-shadow-color)',
                  display: 'block',
                  height: '100%',
                  opacity: 1,
                  position: 'absolute',
                  right: 0,
                  transform: 'rotate(3deg) translate(0px, -4px)',
                  width: 100,
                }}
              />
            </div>
          </div>
        )}
      </NProgress>
      <motion.div
        initial={loading === undefined ? false : { y: 50, opacity: 0 }}
        transition={{ delay: 0 }}
        animate={{ y: !loading ? 0 : 50, opacity: !loading ? 1 : 0 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default LoadingBar
