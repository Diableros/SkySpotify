import * as React from 'react'
import { useTheme } from 'styled-components'
import { TrackType } from '@/types'
import coverDark from '@/img/cover_dark.svg'
import coverLight from '@/img/cover_light.svg'
import formatTrackTime from '@/helpers/formatTrackTime'
import * as S from '../Tracklist.style'
import IconSprite from '@/screens/components/Icon/enum'
import Icon from '@/screens/components/Icon'
import useToggleFavorite from '@/queryService/qieryHooks/useToggleFavorite'
import Theme from '@/theme/enums'

type PropsType = {
  trackData: TrackType
  setCurrentTrack: (track: TrackType) => void
  isLikedTrack: boolean
}

const TrackListItem = ({
  trackData,
  setCurrentTrack,
  isLikedTrack,
}: PropsType) => {
  const theme = useTheme()
  const [isLiked, setIsLiked] = React.useState<boolean>(isLikedTrack)
  const { mutate: toggleFavorite } = useToggleFavorite(isLiked, setIsLiked)

  const handleOnRowClick = (settedTrack: TrackType) => {
    setCurrentTrack(settedTrack)
  }

  const handleOnLikeClick = (
    id: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation()
    toggleFavorite(id)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <S.Row onClick={() => handleOnRowClick(trackData)}>
      <S.Col1>
        <img
          src={theme.name === Theme.Dark ? coverDark : coverLight}
          alt="Album cover"
        />
        {trackData.name} {trackData.release_date}
      </S.Col1>
      <S.Col2>{trackData.author}</S.Col2>
      <S.Col3>{trackData.album}</S.Col3>
      <S.Col4>
        <button
          type="button"
          onClick={(event) => handleOnLikeClick(trackData.id, event)}
        >
          {isLikedTrack ? (
            <Icon icon={IconSprite.Like} size="20px" isActive />
          ) : (
            <Icon icon={IconSprite.Dislike} size="20px" />
          )}
        </button>
        {formatTrackTime(trackData.duration_in_seconds)}
      </S.Col4>
    </S.Row>
  )
}

export default TrackListItem
