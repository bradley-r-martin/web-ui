import classNames from 'classnames'
import { input } from '../../../Design/tokens/input'

const styles = {
  input: {
    base: 'outline-offset-4 focus-visible:outline-1 focus-visible:outline-dashed focus-visible:outline-blue-800',
    preview: {
      base: 'h-full w-full flex items-center justify-center relative',
    },
  },
  buttons: {
    base: 'h-full w-full flex items-center justify-center relative',
  },
}

export function styleMap(props: any) {
  const { variant = 'outlined', isDisabled } = props
  return {
    area: classNames({
      [input.area.interactability.disabled]: isDisabled,
      [input.area.interactability.enabled]: !isDisabled,
    }),
    input: classNames({
      [styles.input.base]: true,
      [input.area.base]: true,
      [input.area.variant.filled]: variant === 'filled',
      [input.area.variant.outlined]: variant === 'outlined',
      [input.area.variant.transparent]: variant === 'transparent',
    }),
    preview: classNames({
      [styles.buttons.base]: true,
    }),
  }
}
