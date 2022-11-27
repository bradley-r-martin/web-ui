import classNames from 'classnames'

const styles = {
  status: {
    base: 'font-semibold rounded  text-center flex items-center select-none',
    intent: {
      default: 'bg-gray-50 text-slate-500',
      primary: 'bg-sky-100 text-sky-700',
      secondary: 'bg-slate-100 text-slate-700',
      consumptive: 'bg-amber-100 text-amber-700',
      constructive: 'bg-emerald-100 text-emerald-700',
      destructive: 'bg-rose-100 text-rose-700',
    },
    sizes: {
      xs: 'px-1 py-0.5 text-xs',
      sm: 'px-2 py-1 text-xs',
      md: 'px-4 py-1.5 text-xs',
      lg: 'px-4 py-2 text-sm',
      xl: 'px-8 py-2 text-sm',
    },
  },
}

export function styleMap(props: any) {
  const { intent, size } = props

  return {
    component: classNames({
      [styles.status.base]: true,
      [styles.status.intent['default']]: intent === 'default',
      [styles.status.intent.primary]: intent === 'primary',
      [styles.status.intent.secondary]: intent === 'secondary',
      [styles.status.intent.consumptive]: intent === 'consumptive',
      [styles.status.intent.constructive]: intent === 'constructive',
      [styles.status.intent.destructive]: intent === 'destructive',

      [styles.status.sizes.xs]: size === 'xs',
      [styles.status.sizes.sm]: size === 'sm',
      [styles.status.sizes.md]: size === 'md',
      [styles.status.sizes.lg]: size === 'lg',
      [styles.status.sizes.xl]: size === 'xl',
    }),
  }
}
