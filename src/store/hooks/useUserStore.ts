import { useAppSelector } from '@/store/hooks/reduxHooks'
import { RootStateType } from '@/store'
import { UserDataType } from '@/store/userSlice'

export const useUserStore = (getField: keyof UserDataType) => {
  const field = useAppSelector((state: RootStateType) => state.user[getField])

  return field
}

export default useUserStore
