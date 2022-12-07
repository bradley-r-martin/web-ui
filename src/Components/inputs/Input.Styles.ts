import classNames from 'classnames'
import { input } from '../../Design/tokens/input'

export function styleMap(props: any) {
  const { isDisabled, variant = 'outlined', type } = props
  return {
    area: classNames({
      'outline-offset-4 focus-visible:outline-1 focus-visible:outline-dashed focus-visible:outline-blue-800':
        true,
      [input.area.base]: type !== 'image',
      [input.area.variant.filled]: variant === 'filled' && type !== 'image',
      [input.area.variant.outlined]: variant === 'outlined' && type !== 'image',
      [input.area.variant.transparent]: variant === 'transparent' && type !== 'image',
      [input.area.interactability.disabled]: isDisabled,
      [input.area.interactability.enabled]: !isDisabled,
    }),
  }
}
