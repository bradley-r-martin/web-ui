import React, { FunctionComponent } from 'react'

import { ModalTitleProps } from './ModalTitle.Definition'

const ModalTitle: FunctionComponent<ModalTitleProps> = (props) => {
  const { title, description, icon, hero } = props

  return (
    <div className={`flex flex-col justify-center p-3 ${hero ? 'items-center flex-1 h-64' : ''}`}>
      <span
        className={`flex items-start space-x-2 ${
          hero ? 'flex flex-col items-center justify-center space-y-4 p-3' : ''
        }`}
      >
        {icon ? (
          <span
            className={`mt-0.5 block ${
              hero ? 'h-20 w-20 bg-slate-50 rounded-full p-5' : 'h-5 w-5'
            }`}
          >
            {icon}
          </span>
        ) : null}
        <span className={`flex flex-col ${hero ? 'items-center' : ''}`}>
          <span>{title}</span>
          {description ? (
            <span className='text-xs text-slate-600 font-light'>{description}</span>
          ) : null}
        </span>
      </span>
    </div>
  )
}

export default ModalTitle
