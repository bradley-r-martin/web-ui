import classNames from 'classnames'

const styles = {
  component: {
    base: 'flex overflow-hidden w-full',
    inline: 'space-x-2 items-center',
    stacked: 'flex-col space-y-2',
  },
}

export function styleMap(props: any) {
  const { inline = false, type } = props
  return {
    component: classNames({
      'flex-row-reverse space-x-reverse justify-end': ['radio', 'checkbox'].includes(type),
      [styles.component.base]: true,
      [styles.component.inline]: inline,
      [styles.component.stacked]: !inline,
    }),
  }
}
