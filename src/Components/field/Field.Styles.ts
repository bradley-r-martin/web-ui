import classNames from 'classnames'

const styles = {
  component: {
    base: 'flex',
    inline: 'space-x-4 items-center',
    stacked: 'flex-col space-y-2',
  },
}

export function styleMap(props: any) {
  const { inline = false } = props
  return {
    component: classNames({
      [styles.component.base]: true,
      [styles.component.inline]: inline,
      [styles.component.stacked]: !inline,
    }),
  }
}
