import { DateFunctions, DateProps } from './Date.Definition'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import { CalculatorIcon } from '@heroicons/react/24/outline'
import MultiRef from 'react-multi-ref'
import { styleMap } from './Date.Styles'
import { useInputPart } from '../../../Hooks/useInputPart/useInputPart'

const Date: React.ForwardRefRenderFunction<DateFunctions, DateProps> = (props: DateProps, ref) => {
  const { ...native } = props

  const [date, setDate] = useState({ day: '', month: '', year: '' })

  const refs = new MultiRef<number, HTMLInputElement>()

  const inputRef = useRef<HTMLInputElement>(null)

  function focus() {
    refs.map.get(0)?.focus()
  }

  function maxLengthReached(e: React.ChangeEvent<HTMLInputElement>) {
    return e.target.value.length === e.target.maxLength
  }

  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap(props)

  const [datestate, setDateState] = useState({
    day: '',
    month: '',
    year: '',
    hour: '',
    minute: '',
  })

  const parts = useInputPart({
    parts: [
      {
        name: 'day',
        value: datestate.day,
        maxLength: 2,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          if (!isNaN(parseInt(e.target.value)) || e.target.value === '') {
            setDateState({ ...datestate, [e.target.name]: e.target.value })
          }
        },
      },
      {
        name: 'month',
        value: datestate.month,
        maxLength: 2,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          if (!isNaN(parseInt(e.target.value)) || e.target.value === '') {
            setDateState({ ...datestate, [e.target.name]: e.target.value })
          }
        },
      },
      {
        name: 'year',
        value: datestate.year,
        maxLength: 4,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          if (!isNaN(parseInt(e.target.value)) || e.target.value === '') {
            setDateState({ ...datestate, [e.target.name]: e.target.value })
          }
        },
      },
      {
        name: 'hour',
        value: datestate.hour,
        maxLength: 2,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          if (!isNaN(parseInt(e.target.value)) || e.target.value === '') {
            setDateState({ ...datestate, [e.target.name]: e.target.value })
          }
        },
      },
      {
        name: 'minute',
        value: datestate.minute,
        maxLength: 2,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          if (!isNaN(parseInt(e.target.value)) || e.target.value === '') {
            setDateState({ ...datestate, [e.target.name]: e.target.value })
          }
        },
      },
    ],
  })

  return (
    <div className='flex space-x-1 p-1 justify-end'>
      <div className='rounded flex space-x-1'>
        <input
          key={0}
          type='text'
          autoComplete='off'
          style={{ caretColor: 'transparent' }}
          className={`focus:bg-sky-100 rounded focus:text-black px-1 text-center selection:bg-transparent ${classnames.input}`}
          {...parts[0]}
        />
        <span>/</span>
        <input
          key={1}
          type='text'
          autoComplete='off'
          style={{ caretColor: 'transparent' }}
          className={`focus:bg-sky-100 rounded focus:text-black px-1 text-center selection:bg-transparent ${classnames.input}`}
          {...parts[1]}
        />
        <span>/</span>
        <input
          key={2}
          type='text'
          autoComplete='off'
          style={{ caretColor: 'transparent' }}
          className={`focus:bg-sky-100 rounded focus:text-black px-1 text-center selection:bg-transparent ${classnames.input}`}
          {...parts[2]}
        />
      </div>
      <div className='rounded flex space-x-1'>
        <input
          key={3}
          type='text'
          autoComplete='off'
          style={{ caretColor: 'transparent' }}
          className={`focus:bg-sky-100 rounded focus:text-black px-1 text-center selection:bg-transparent ${classnames.input}`}
          {...parts[3]}
        />
        <span>:</span>
        <input
          key={4}
          type='text'
          autoComplete='off'
          style={{ caretColor: 'transparent' }}
          className={`focus:bg-sky-100 rounded focus:text-black px-1 text-center selection:bg-transparent ${classnames.input}`}
          {...parts[4]}
        />
      </div>
      {/* <div className='focus-within:bg-sky-100 rounded flex space-x-1'>
        <input
          key={0}
          type='text'
          autoComplete='off'
          style={{ caretColor: 'transparent' }}
          className={
            'focus:border-b-sky-500 border-b-2 border-b-transparent bg-transparent focus:text-black px-1 text-center selection:bg-transparent w-full outline-none'
          }
          {...parts[0]}
        />
        <span>/</span>
        <input
          key={1}
          type='text'
          autoComplete='off'
          style={{ caretColor: 'transparent' }}
          className={
            'focus:border-b-sky-500 border-b-2 border-b-transparent bg-transparent focus:text-black px-1 text-center selection:bg-transparent w-full outline-none'
          }
          {...parts[1]}
        />
        <span>/</span>
        <input
          key={2}
          type='text'
          autoComplete='off'
          style={{ caretColor: 'transparent' }}
          className={
            'focus:border-b-sky-500 border-b-2 border-b-transparent bg-transparent focus:text-black px-1 text-center selection:bg-transparent w-full outline-none'
          }
          {...parts[2]}
        />
      </div>
      <div className='focus-within:bg-sky-100 rounded flex space-x-1'>
        <input
          key={3}
          type='text'
          autoComplete='off'
          style={{ caretColor: 'transparent' }}
          className={
            'focus:border-b-sky-500 border-b-2 border-b-transparent bg-transparent focus:text-black px-1 text-center selection:bg-transparent w-full outline-none'
          }
          {...parts[3]}
        />
        <span>:</span>
        <input
          key={4}
          type='text'
          autoComplete='off'
          style={{ caretColor: 'transparent' }}
          className={
            'focus:border-b-sky-500 border-b-2 border-b-transparent bg-transparent focus:text-black px-1 text-center selection:bg-transparent w-full outline-none'
          }
          {...parts[4]}
        />
      </div> */}

      {/* <span className='flex flex-1 space-x-1'>
        <span className='w-7'>
          <input
            ref={refs.ref(0)}
            type='text'
            className={`focus:bg-sky-100 rounded focus:text-black px-1 text-center selection:bg-transparent ${classnames.input} ${className}`}
            {...native}
            value={date.day}
            maxLength={2}
            name='day'
            style={{ caretColor: 'transparent' }}
            onMouseDown={(e) => e.stopPropagation()}
            onFocus={onFocus}
            onChange={(e) => {
              if (maxLengthReached(e)) {
                refs.map.get(1)?.focus()
              }
              if (['4', '5', '6', '7', '8', '9'].includes(e.target.value)) {
                setDate({ ...date, day: `0${e.target.value}` })
                refs.map.get(1)?.focus()
              } else {
                setDate({ ...date, day: e.target.value })
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                ArrowLeft(e, 0)
              }
              if (e.key === 'ArrowRight') {
                ArrowRight(e, 0)
              }
              if (e.key === 'ArrowUp') {
                ArrowUp(e)
              }
              if (e.key === 'ArrowDown') {
                ArrowDown(e)
              }
              if (e.key === 'Backspace') {
                Backspace(e, 0)
              }

              if (date.day === '3' && !['0', '1'].includes(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </span>
        <span>/</span>
        <span className='w-7'>
          <input
            ref={refs.ref(1)}
            type='text'
            className={`focus:bg-sky-100 rounded focus:text-black px-1 text-center selection:bg-transparent ${classnames.input} ${className}`}
            {...native}
            value={date.month}
            maxLength={2}
            name='month'
            style={{ caretColor: 'transparent' }}
            onMouseDown={(e) => e.stopPropagation()}
            onFocus={onFocus}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                ArrowLeft(e, 1)
              }
              if (e.key === 'ArrowRight') {
                ArrowRight(e, 1)
              }
              if (e.key === 'ArrowUp') {
                ArrowUp(e)
              }
              if (e.key === 'ArrowDown') {
                ArrowDown(e)
              }
              if (e.key === 'Backspace') {
                Backspace(e, 1)
              }

              if (date.month === '1' && !['0', '1', '2'].includes(e.key)) {
                e.preventDefault()
              }
            }}
            onChange={(e) => {
              if (maxLengthReached(e)) {
                refs.map.get(2)?.focus()
              }
              if (['2', '3', '4', '5', '6', '7', '8', '9'].includes(e.target.value)) {
                setDate({ ...date, month: `0${e.target.value}` })
                refs.map.get(2)?.focus()
              } else {
                setDate({ ...date, month: e.target.value })
              }
            }}
          />
        </span>
        <span>/</span>
        <span className='w-12'>
          <input
            ref={refs.ref(2)}
            type='text'
            className={`focus:bg-sky-100 rounded focus:text-black px-1 text-center selection:bg-transparent ${classnames.input} ${className}`}
            {...native}
            value={date.year}
            maxLength={4}
            name='year'
            style={{ caretColor: 'transparent' }}
            onMouseDown={(e) => e.stopPropagation()}
            onFocus={onFocus}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                ArrowLeft(e, 2)
              }
              if (e.key === 'ArrowRight') {
                ArrowRight(e, 2)
              }
              if (e.key === 'ArrowUp') {
                ArrowUp(e)
              }
              if (e.key === 'ArrowDown') {
                ArrowDown(e)
              }

              if (e.key === 'Backspace') {
                Backspace(e, 2)
              }
            }}
            onChange={(e) => {
              if (['3', '4', '5', '6', '7', '8', '9'].includes(e.target.value)) {
                e.preventDefault()
              }
              if (['11', '12', '13', '14', '15', '16', '17', '18'].includes(e.target.value)) {
                e.preventDefault()
              } else {
                setDate({ ...date, year: e.target.value })
              }
            }}
          />
        </span>
      </span> */}
      <button
        onClick={() => alert('calendar')}
        className='p-0.5 px-1 hover:bg-sky-500 hover:text-white rounded cursor-pointer active:transform active:scale-95 focus-visible:outline-1 focus-visible:outline-dashed'
      >
        <CalculatorIcon className='h-4 w-4' />
      </button>
      <div className='absolute top-full left-1/2 pt-2'>
        <div className=' shadow bg-white border border-slate-200 p-3'>
          <div className='w-64 h-64'></div>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Date)
