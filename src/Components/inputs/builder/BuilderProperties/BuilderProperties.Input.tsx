import React, { FunctionComponent } from 'react'
import useBuilder, { useBlock } from '../Builder.context'

import { Button } from '../../../button'
import Input from '../../Input'
import { InputProps } from '../../Input.Definition'
import _ from 'lodash'

interface BuilderPropertiesInputProps {
  input: InputProps
}

const BuilderPropertiesInput: FunctionComponent<BuilderPropertiesInputProps> = (props) => {
  const { input } = props

  const [blocks, setBlocks] = useBuilder().blocks

  const [block] = useBlock()
  const index = blocks?.findIndex(({ id }) => id === block?.id)

  function output(value: unknown) {
    if (blocks) {
      if (Number.isInteger(index)) {
        setBlocks([..._.set(blocks, `[${index}].data.${input?.name}`, value)])
      }
    }
  }

  return (
    <div className='text-xs'>
      <Input {...input} input={_.get(blocks, `[${index}].data.${input?.name}`)} output={output} />
    </div>
  )
}

export default BuilderPropertiesInput
