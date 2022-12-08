export const input = {
  input: {
    base: 'border-none outline-none w-full bg-transparent resize-none',
  },

  area: {
    base: 'border-solid rounded flex items-center justify-center relative border-2 flex-1 focus-within:ring-opacity-20 w-full items-stretch focus-within:ring-2',
    variant: {
      filled:
        'bg-gray-200 focus-within:bg-white focus-within:border-sky-400 focus-within:ring-sky-400',
      transparent: 'border-transparent',
      outlined:
        'bg-white border-gray-300 text-gray-700 focus-within:border-sky-400 focus-within:ring-sky-400',
    },
    interactability: {
      disabled: 'saturate-50 opacity-50 cursor-default pointer-events-none',
      enabled: 'cursor-text ',
    },
  },
}
