import classNames from 'classnames'

export const base = ''

export const styles = {
  component: {
    base: '',
    unstacked: 'flex flex-col justify-center space-y-2',
    stacked: 'grid gap-2 grid-cols-[fit-content(40%)_1fr]',
  },
}

export function styleMap(props: any) {
  const { stacked } = props

  return {
    component: classNames({
      [styles.component.base]: true,
      [styles.component.stacked]: stacked,
      [styles.component.unstacked]: !stacked,
    }),
  }
}
