import classNames from 'classnames'

export const styles = {
  component: {
    base: '',
    inline:
      'bg-yellow-200 select-none text-yellow-700 p-1 rounded mt-1 z-20 relative text-xs flex items-start leading-5  space-x-0.5 font-semibold animate-animated animate-faster animate-fadeInDown',
  },
}

export function styleMap() {
  return {
    component: classNames({
      [styles.component.inline]: true,
    }),
  }
}
