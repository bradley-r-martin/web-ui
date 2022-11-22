import classNames from 'classnames'

export const base = ''

export const styles = {
  component: {
    base: 'flex flex-col justify-center',
  },
  description: {
    base: 'font-light',
    interactability: {
      disabled: 'saturate-50 opacity-50 cursor-default pointer-events-none',
      enabled: '',
    },
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
  const { isDisabled } = props

  return {
    component: classNames({
      [styles.component.base]: true,
    }),
    label: classNames({
      [styles.label.base]: true,
      [styles.label.interactability.enabled]: !isDisabled,
      [styles.label.interactability.disabled]: isDisabled,
    }),
    description: classNames({
      [styles.description.base]: true,
      [styles.description.interactability.enabled]: !isDisabled,
      [styles.description.interactability.disabled]: isDisabled,
    }),
  }
}
