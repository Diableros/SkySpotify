import type { Dispatch, SetStateAction } from 'react'
import { TrackType } from '@/types'
import cover from '@/img/blank_cover.png'
import formatTrackTime from '@/helpers/formatTrackTime'
import * as S from '../../TrackList.style'
import IconSprite from '@/screens/components/Icon/enum'
import Icon from '@/screens/components/Icon'

type PropsType = {
  trackData: TrackType
  setCurrentTrack: Dispatch<SetStateAction<TrackType | undefined>>
}

const TrackListItem = ({ trackData, setCurrentTrack }: PropsType) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <S.Row onClick={() => setCurrentTrack(trackData)}>
      <S.Col1>
        <img src={cover} alt="Album cover" />
        {trackData.name}
      </S.Col1>
      <S.Col2>{trackData.author}</S.Col2>
      <S.Col3>{trackData.album}</S.Col3>
      <S.Col4>
        <Icon icon={IconSprite.Like} size={20} inActive />
        {formatTrackTime(trackData.duration_in_seconds)}
      </S.Col4>
    </S.Row>
  )
}

export default TrackListItem
