import classNames from 'classnames'
import { input } from '../../../Design/tokens/input'

const styles = {
  component: {
    base: 'inline-flex space-x-2',
  },
  checkbox: {
    base: 'flex items-center justify-center relative',
  },
  input: {
    base: 'absolute inset-0 outline-none opacity-0',
  },
  checkmark: {
    base: 'p-0.5 h-4 w-4 m-px inline-block rounded transition ease-in-out duration-400',
    interactability: {
      disabled: 'saturate-50 opacity-50 cursor-default pointer-events-none',
      enabled: '',
    },
    state: {
      checked: 'scale-100 bg-sky-500',
      unchecked: 'scale-0 bg-white',
    },
  },
  icon: {
    base: 'h-full w-full text-white',
  },
  label: {
    base: 'flex flex-col justify-center font-semibold text-slate-700',
    interactability: {
      disabled: 'saturate-50 opacity-50 cursor-default pointer-events-none',
      enabled: 'cursor-pointer',
    },
  },
}

export function styleMap(props: any) {
  const { isChecked, variant = 'outlined' } = props
  return {
    component: classNames({
      [styles.component.base]: true,
    }),
    checkbox: classNames({
      [styles.checkbox.base]: true,
      [input.area.base]: true,
      [input.area.variant.filled]: variant === 'filled',
      [input.area.variant.outlined]: variant === 'outlined',
      [input.area.variant.transparent]: variant === 'transparent',
    }),
    input: classNames({
      [styles.input.base]: true,
    }),
    checkmark: classNames({
      [styles.checkmark.base]: true,
      [styles.checkmark.interactability.disabled]: false,
      [styles.checkmark.interactability.enabled]: true,
      [styles.checkmark.state.checked]: isChecked,
      [styles.checkmark.state.unchecked]: !isChecked,
    }),
    icon: classNames({
      [styles.icon.base]: true,
    }),
  }
}
