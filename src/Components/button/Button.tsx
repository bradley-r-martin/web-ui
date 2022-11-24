import { ButtonFunctions, ButtonProps } from './Button.Definition'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

import Conditional from '../conditional/Conditional'
import { styleMap } from './Button.styles'
import { useEnhancer } from '../../Hooks/useEnhancer/useEnhancer'

const Button: React.ForwardRefRenderFunction<ButtonFunctions, ButtonProps> = (
  props: ButtonProps,
  ref,
) => {
  const {
    enhancers,
    children,
    intent = 'default',
    variant = 'filled',
    shape = 'squircle',
    size = 'md',
    selected = false,
    loading = false,
    disabled = false,
    type = 'button',
    onClick,
  } = props
  const isLoading = loading
  const isDisabled = disabled
  const isSelected = selected

  const buttonRef = useRef<HTMLButtonElement>(null)

  function focus() {
    buttonRef?.current?.focus()
  }

  const { TopEnhancer, BottomEnhancer, LeftEnhancer, RightEnhancer } = useEnhancer({
    focus,
    enhancers,
  })

  useImperativeHandle(ref, () => ({}))

  const classnames = styleMap({ isDisabled, isLoading, isSelected, variant, intent, shape, size })

  return (
    <button type={type} ref={buttonRef} className={classnames.component} onClick={onClick}>
      <LeftEnhancer />
      <span>
        <TopEnhancer />
        <span>
          <span className='flex items-center'>
            <span
              className={`transform ${
                isLoading ? 'scale-100 w-4 h-4 mr-2' : 'scale-0 w-0 h-0'
              }  transition-all ease-in-out duration-200`}
            >
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                viewBox='0 0 50 50'
              >
                <path
                  fill='currentColor'
                  d='M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z'
                >
                  <animateTransform
                    attributeType='xml'
                    attributeName='transform'
                    type='rotate'
                    from='0 25 25'
                    to='360 25 25'
                    dur='0.6s'
                    repeatCount='indefinite'
                  ></animateTransform>
                </path>
              </svg>
            </span>
            <span className='space-x-2 flex items-center'>{children}</span>
          </span>
        </span>
        <BottomEnhancer />
      </span>
      <RightEnhancer />
      <Conditional expression={isSelected}>
        <span className='absolute border-2 border-emerald-500 -top-2 -right-2 bg-white text-emerald-700 rounded-full p-1'>
          <span className='bg-emerald-500 h-2 w-2 rounded-full block'></span>
        </span>
      </Conditional>
    </button>
  )
}

export default forwardRef(Button)
