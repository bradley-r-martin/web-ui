import classNames from 'classnames'
import { input } from '../../../Design/tokens/input'

export function styleMap(props: any) {
  const { variant = 'outlined' } = props
  return {
    input: classNames({
      [input.area.base]: true,

      [input.area.variant.filled]: variant === 'filled',
      [input.area.variant.outlined]: variant === 'outlined',
      [input.area.variant.transparent]: variant === 'transparent',
      'flex flex-col h-60': true,
    }),
  }
}
