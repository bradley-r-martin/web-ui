import { useId, useState } from 'react'

import { UseIOProps } from './useIO.Definition'
import _ from 'lodash'

export function useIO(props: UseIOProps) {
  const name = props?.name ?? useId()

  const [state, setState] = useState({})

  const input = props?.input ?? _.get(state, name)
  const output =
    props?.output ??
    ((value: unknown) => {
      setState({ ..._.set(state, name, value) })
    })

  return [input, output] as const
}
