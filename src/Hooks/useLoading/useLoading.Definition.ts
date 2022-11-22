export interface UseLoadingProps {
  inherit?: boolean
  loading?: boolean
}

export interface UseLoadingFunctions {
  load: () => void
  unload: () => void
}
