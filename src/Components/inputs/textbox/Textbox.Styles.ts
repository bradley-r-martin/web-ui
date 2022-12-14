import classNames from 'classnames'
import { input } from '../../../Design/tokens/input'

export function styleMap(props: any) {
  const { variant = 'outlined' } = props
  return {
    area: classNames({
      [input.area.base]: true,
      [input.area.variant.filled]: variant === 'filled',
      [input.area.variant.outlined]: variant === 'outlined',
      [input.area.variant.transparent]: variant === 'transparent',
    }),
    input: classNames({}),
  }
}
