import classNames from 'classnames'
import { input } from '../../../Design/tokens/input'

export function styleMap(props: any) {
  const { variant = 'outlined' } = props
  return {
    preview: classNames({
      'outline-offset-4 focus-visible:outline-1 focus-visible:outline-dashed focus-visible:outline-blue-800':
        true,
      [input.area.base]: true,
      [input.area.variant.filled]: variant === 'filled',
      [input.area.variant.outlined]: variant === 'outlined',
      [input.area.variant.transparent]: variant === 'transparent',
    }),
  }
}
