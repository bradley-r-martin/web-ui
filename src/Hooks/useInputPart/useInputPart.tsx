import MultiRef from 'react-multi-ref'
import React from 'react'
import { UseInputPartProps } from './useInputPart.Definition'

export function useInputPart(props: UseInputPartProps) {
  const refs = new MultiRef<number, HTMLInputElement>()
  const { parts } = props
  function ArrowRight(e: React.KeyboardEvent<HTMLInputElement>, i: number) {
    // If not last field move to the right
    if (i < parts.length - 1) {
      refs.map.get(i + 1)?.focus()
    }
    e.preventDefault()
  }
  function ArrowLeft(e: React.KeyboardEvent<HTMLInputElement>, i: number) {
    // If not first field move to the left
    if (i > 0) {
      refs.map.get(i - 1)?.focus()
    }
    e.preventDefault()
  }
  function Backspace(e: React.KeyboardEvent<HTMLInputElement>, i: number) {
    if (e.key === 'Backspace' && e.currentTarget.value === '') {
      e.preventDefault()
      if (i > 0) {
        refs.map.get(i - 1)?.focus()
      }
    }
  }
  function onFocus(e: React.FocusEvent<HTMLInputElement>) {
    if (maxLengthReached(e)) {
      e.target.select()
    } else {
      e.target.setSelectionRange(-1, -1)
    }
  }
  function maxLengthReached(e: React.ChangeEvent<HTMLInputElement>) {
    return e.target.value.length === e.target.maxLength
  }

  return parts.map((part, i) => {
    return {
      ...part,
      ref: refs.ref(i),
      onFocus,
      onMouseDown: (e: React.KeyboardEvent<HTMLInputElement>) => e.stopPropagation(),
      onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowLeft') {
          ArrowLeft(e, i)
          return
        }
        if (e.key === 'ArrowRight') {
          ArrowRight(e, i)
          return
        }
        if (e.key === 'Backspace') {
          Backspace(e, i)
          return
        }
      },
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        if (part?.onChange) {
          part?.onChange(e)
        }
        if (maxLengthReached(e)) {
          refs.map.get(i + 1)?.focus()
        }
      },
    } as unknown
  }) as React.HTMLProps<HTMLInputElement>[]
}
