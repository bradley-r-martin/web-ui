import classNames from 'classnames'
import { input } from '../../../Design/tokens/input'

const styles = {
  component: {
    base: 'inline-flex space-x-2',
  },
}

export function styleMap(props: any) {
  const { variant = 'outlined' } = props
  return {
    component: classNames({
      [styles.component.base]: true,
      [input.area.base]: true,

      [input.area.variant.filled]: variant === 'filled',
      [input.area.variant.outlined]: variant === 'outlined',
      [input.area.variant.transparent]: variant === 'transparent',
    }),
  }
}
