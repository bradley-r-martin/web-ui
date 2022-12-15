import classNames from 'classnames'

export const base = {}

const styles = {
  button: {
    base: 'relative outline-none flex items-center justify-center space-x-3 font-semibold text-xs no-underline transition ease-in-out duration-200 select-none',
    interactability: {
      selected: ' cursor-default pointer-events-none ring-1 ring-inset',
      loading: 'brightness-75 cursor-default pointer-events-none',
      enabled:
        'cursor-pointer active:transform active:scale-95 focus-visible:outline-1 focus-visible:outline-dashed',
      disabled: 'saturate-50 opacity-50 cursor-default pointer-events-none',
    },
    variant: {
      filled: 'border-none',
      outlined: 'border',
    },
    intent: {
      default: {
        filled:
          'shadow bg-white hover:bg-gray-50 active:bg-gray-200 focus-visible:outline-slate-800 text-slate-700',
        outlined:
          'shadow bg-transparent border-slate-500 hover:border-slate-600 hover:ring-1 hover:ring-inset ring-slate-600 active:bg-gray-50 active:border-slate-800 focus-visible:outline-slate-800',
        transparent:
          'text-slate-500 bg-transparent active:bg-gray-50 focus-visible:outline-slate-800',
      },
      primary: {
        filled:
          'shadow bg-blue-500 hover:bg-sky-600 active:bg-sky-800 focus-visible:outline-sky-800 text-white',
        outlined:
          'shadow bg-transparent border-blue-500 hover:border-sky-600 hover:ring-1 hover:ring-inset ring-sky-600 active:bg-sky-50 active:border-sky-800 focus-visible:outline-sky-800 text-sky-700',
        transparent:
          'text-blue-500 bg-transparent hover:text-sky-600 active:bg-sky-50 focus-visible:outline-sky-800 active:text-sky-800',
      },
      secondary: {
        filled:
          'shadow bg-slate-500 hover:bg-slate-600 active:bg-slate-800 focus-visible:outline-slate-800 text-white',
        outlined:
          'shadow bg-transparent border-slate-500 hover:border-slate-600 hover:ring-1 hover:ring-inset ring-slate-600 active:bg-slate-50 active:border-slate-800 focus-visible:outline-slate-800 text-slate-700',
        transparent:
          'text-slate-500 bg-transparent hover:text-slate-600 active:bg-slate-50 focus-visible:outline-slate-800 active:text-slate-800',
      },

      consumptive: {
        filled:
          'shadow bg-amber-500 hover:bg-amber-600 active:bg-amber-800 focus-visible:outline-amber-800 text-white',
        outlined:
          'shadow bg-transparent border-amber-500 hover:border-amber-600 hover:ring-1 hover:ring-inset ring-amber-600 active:bg-amber-50 active:border-amber-800 focus-visible:outline-amber-800 text-amber-700',
        transparent:
          'text-amber-500 bg-transparent hover:text-amber-600 active:bg-amber-50 focus-visible:outline-amber-800 active:text-amber-800',
      },

      constructive: {
        filled:
          'shadow bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-800 focus-visible:outline-emerald-800 text-white',
        outlined:
          'shadow bg-transparent border-emerald-500 hover:border-emerald-600 hover:ring-1 hover:ring-inset ring-emerald-600 active:bg-emerald-50 active:border-emerald-800 focus-visible:outline-emerald-800 text-emerald-700',
        transparent:
          'text-emerald-500 bg-transparent hover:text-emerald-600 active:bg-emerald-50 focus-visible:outline-emerald-800 active:text-emerald-800',
      },
      destructive: {
        filled:
          'shadow bg-rose-500 hover:bg-rose-600 active:bg-rose-800 focus-visible:outline-rose-800 text-white',
        outlined:
          'shadow bg-transparent border-rose-500 hover:border-rose-600 hover:ring-1 hover:ring-inset ring-rose-600 active:bg-rose-50 active:border-rose-800 focus-visible:outline-rose-800 text-rose-700',
        transparent:
          'text-rose-500 bg-transparent hover:text-rose-600 active:bg-rose-50 focus-visible:outline-rose-800 active:text-rose-800',
      },
    },
    shape: {
      squircle: 'rounded',
      pill: 'rounded-full',
      square: '',
      circle: 'rounded-full aspect-square	',
    },
    size: {
      squircle: {
        xs: 'py-1 px-2',
        sm: 'py-2 px-3',
        md: 'py-2.5 px-4',
        lg: 'py-3 px-5',
        xl: 'py-3.5 px-6',
      },
      circle: {
        xs: 'p-1',
        sm: 'p-2',
        md: 'p-2.5',
        lg: 'p-3',
        xl: 'p-3.5',
      },
      pill: {
        xs: 'py-1 px-2',
        sm: 'py-2 px-3',
        md: 'py-2.5 px-4',
        lg: 'py-3 px-5',
        xl: 'py-3.5 px-6',
      },
      square: {
        xs: 'p-1',
        sm: 'p-2',
        md: 'p-2.5',
        lg: 'p-3',
        xl: 'p-3.5',
      },
    },
  },
}

export function styleMap(props: any) {
  const { isDisabled, isLoading, isSelected, variant, intent, size, shape } = props

  return {
    component: classNames(
      {
        // Size squircle
        [styles.button.size.squircle.xs]: shape === 'squircle' && size === 'xs',
        [styles.button.size.squircle.sm]: shape === 'squircle' && size === 'sm',
        [styles.button.size.squircle.md]: shape === 'squircle' && size === 'md',
        [styles.button.size.squircle.lg]: shape === 'squircle' && size === 'lg',
        [styles.button.size.squircle.xl]: shape === 'squircle' && size === 'xl',
      },
      {
        // Size square
        [styles.button.size.square.xs]: shape === 'square' && size === 'xs',
        [styles.button.size.square.sm]: shape === 'square' && size === 'sm',
        [styles.button.size.square.md]: shape === 'square' && size === 'md',
        [styles.button.size.square.lg]: shape === 'square' && size === 'lg',
        [styles.button.size.square.xl]: shape === 'square' && size === 'xl',
      },
      {
        // Size pill
        [styles.button.size.pill.xs]: shape === 'pill' && size === 'xs',
        [styles.button.size.pill.sm]: shape === 'pill' && size === 'sm',
        [styles.button.size.pill.md]: shape === 'pill' && size === 'md',
        [styles.button.size.pill.lg]: shape === 'pill' && size === 'lg',
        [styles.button.size.pill.xl]: shape === 'pill' && size === 'xl',
      },
      {
        // Size circle
        [styles.button.size.circle.xs]: shape === 'circle' && size === 'xs',
        [styles.button.size.circle.sm]: shape === 'circle' && size === 'sm',
        [styles.button.size.circle.md]: shape === 'circle' && size === 'md',
        [styles.button.size.circle.lg]: shape === 'circle' && size === 'lg',
        [styles.button.size.circle.xl]: shape === 'circle' && size === 'xl',
      },
      {
        [styles.button.base]: true,
        [styles.button.interactability.enabled]: !isDisabled,
        [styles.button.interactability.disabled]: isDisabled,
        [styles.button.interactability.loading]: isLoading,
        [styles.button.interactability.selected]: isSelected,
        // Variant
        [styles.button.variant.filled]: variant === 'filled',
        [styles.button.variant.outlined]: variant === 'outlined',

        // Shape
        [styles.button.shape.squircle]: shape === 'squircle',
        [styles.button.shape.square]: shape === 'square',
        [styles.button.shape.circle]: shape === 'circle',
        [styles.button.shape.pill]: shape === 'pill',

        // Size

        // Default
        [styles.button.intent.default.filled]: intent === 'default' && variant === 'filled',
        [styles.button.intent.default.outlined]: intent === 'default' && variant === 'outlined',
        [styles.button.intent.default.transparent]:
          intent === 'default' && variant === 'transparent',
        // Primary
        [styles.button.intent.primary.filled]: intent === 'primary' && variant === 'filled',
        [styles.button.intent.primary.outlined]: intent === 'primary' && variant === 'outlined',
        [styles.button.intent.primary.transparent]:
          intent === 'primary' && variant === 'transparent',
        // Secondary
        [styles.button.intent.secondary.filled]: intent === 'secondary' && variant === 'filled',
        [styles.button.intent.secondary.outlined]: intent === 'secondary' && variant === 'outlined',
        [styles.button.intent.secondary.transparent]:
          intent === 'secondary' && variant === 'transparent',

        // Consumptive
        [styles.button.intent.consumptive.filled]: intent === 'consumptive' && variant === 'filled',
        [styles.button.intent.consumptive.outlined]:
          intent === 'consumptive' && variant === 'outlined',
        [styles.button.intent.consumptive.transparent]:
          intent === 'consumptive' && variant === 'transparent',
        // Constructive
        [styles.button.intent.constructive.filled]:
          intent === 'constructive' && variant === 'filled',
        [styles.button.intent.constructive.outlined]:
          intent === 'constructive' && variant === 'outlined',
        [styles.button.intent.constructive.transparent]:
          intent === 'constructive' && variant === 'transparent',
        // Destructive
        [styles.button.intent.destructive.filled]: intent === 'destructive' && variant === 'filled',
        [styles.button.intent.destructive.outlined]:
          intent === 'destructive' && variant === 'outlined',
        [styles.button.intent.destructive.transparent]:
          intent === 'destructive' && variant === 'transparent',
      },
    ),
  }
}
