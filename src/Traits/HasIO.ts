export type HasIO<Value> = {
  input?: Value
  output?: (value: Value) => void
}
