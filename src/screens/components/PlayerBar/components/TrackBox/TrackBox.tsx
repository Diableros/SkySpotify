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

type PropsType = {
  currentTrack: TrackType
}

const TrackBox = ({
  currentTrack: { name, author, stared_user, id },
}: PropsType) => {
  const theme = useTheme()
  const currentUserId = useUserStore('id')
  const [isLiked, setIsLiked] = React.useState<boolean>(
    stared_user.some(({ id: staredId }) => staredId === currentUserId)
  )
  const { mutate: toggleFavorite } = useToggleFavorite(isLiked, setIsLiked)

  const handleLikeClick = (trackId: TrackType['id']) => {
    toggleFavorite(trackId)
  }

  return (
    <div className={s.TrackBox}>
      <button
        type="button"
        className={s.reactionsBox}
        onClick={() => handleLikeClick(id)}
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
        <div className={s.TrackInfoTitle}>{name}</div>
        <div className={s.TrackInfoAutor}>{author}</div>
      </div>
    </div>
  )
}

export default TrackBox
