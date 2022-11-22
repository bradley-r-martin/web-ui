import classNames from 'classnames'
import { input } from '../../../Design/tokens/input'

export function styleMap(props: any) {
  return {
    input: classNames({
      [input.input.base]: true,
    }),
  }
}
