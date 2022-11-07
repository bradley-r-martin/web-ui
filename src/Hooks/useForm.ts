import { useEffect, useState } from 'react'

export function useForm(value = {}) {
  const [form, setForm] = useState({})

  function values() {
    return form
  }
  function set() {
    setForm({})
  }
  function clear() {
    setForm({})
  }
  function fresh() {
    setForm(value)
  }

  //   useEffect(() => {
  //     if (form !== value) {
  //       setForm(value)
  //     }
  //   }, [value])

  return [values, set, clear, fresh] as const
}
