import * as React from 'react'
import { useTheme } from 'styled-components'
import s from './TrackBox.module.scss'
import { TrackType } from '@/types'
import Icon from '@/screens/components/Icon'
import IconSprite from '@/screens/components/Icon/enum'
import useUserStore from '@/store/hooks/useUserStore'
import useToggleFavorite from '@/queryService/qieryHooks/useToggleFavorite'
import coverDark from '@/img/cover_dark.svg'
import coverLight from '@/img/cover_light.svg'
import Theme from '@/theme/enums'
import useCurrentTrack from '@/hooks/useCurrentTrack'

const TrackBox = () => {
  const theme = useTheme()
  const currentUserId = useUserStore('id')
  const { currentTrack } = useCurrentTrack()

  const [isLiked, setIsLiked] = React.useState<boolean>(false)

  const { mutate: toggleFavorite } = useToggleFavorite(isLiked, setIsLiked)

  const handleLikeClick = (trackId: TrackType['id']) => {
    toggleFavorite(trackId)
  }

  React.useEffect(() => {
    if (currentTrack)
      setIsLiked(
        currentTrack.stared_user.some(
          ({ id: staredId }) => staredId === currentUserId
        )
      )
  }, [setIsLiked, currentTrack, currentUserId])

  return currentTrack ? (
    <div className={s.TrackBox}>
      <button
        type="button"
        className={s.reactionsBox}
        onClick={() => handleLikeClick(currentTrack.id)}
      >
        {isLiked ? (
          <Icon icon={IconSprite.Like} size="24px" />
        ) : (
          <Icon icon={IconSprite.Dislike} size="24px" />
        )}
      </button>
      <img
        className={s.cover}
        src={theme.name === Theme.Dark ? coverDark : coverLight}
        alt="Album cover"
      />
      <div className={s.TrackInfo}>
        <div className={s.TrackInfoTitle}>{currentTrack.name}</div>
        <div className={s.TrackInfoAutor}>{currentTrack.author}</div>
      </div>
    </div>
  ) : null
}

export default TrackBox
