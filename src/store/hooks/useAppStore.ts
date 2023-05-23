import { useAppSelector } from '@/store/hooks/reduxHooks'
import { RootStateType } from '@/store'
import { AppStateType } from '@/store/appSlice'

export const useAppStore = (getField: keyof AppStateType) => {
  const field = useAppSelector((state: RootStateType) => state.app[getField])

  return field
}

export default useAppStore
