export type HasEnhancers = {
  enhancers?: {
    top?: React.FC<any>
    bottom?: React.FC<any>
    left?: React.FC<any>
    right?: React.FC<any>
  }
}
