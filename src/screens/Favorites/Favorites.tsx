import useAppStore from '@/store/hooks/useAppStore'
import { TrackType } from '@/types'
import useUserStore from '@/store/hooks/useUserStore'
import * as S from '../AllTracksList/AllTracksList.style'
import TrackList from '../components/TrackList'

const Favorites = () => {
  const tracks = useAppStore('trackList') as TrackType[]
  const currentUserId = useUserStore('id')

  const content = tracks.filter(({ stared_user }) =>
    stared_user.some(({ id }) => id === currentUserId)
  )

  return (
    <>
      <S.PageTitle>Мои треки</S.PageTitle>
      <TrackList tracksArray={content} />
    </>
  )
}

export default Favorites
