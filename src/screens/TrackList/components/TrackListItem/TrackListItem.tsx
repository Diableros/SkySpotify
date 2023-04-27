import * as React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { TrackType } from '@/types'
import sprite from '@/img/sprite.svg'
import cover from '@/img/blank_cover.png'
import formatTrackTime from '@/helpers/formatTrackTime'
import s from '../../TrackList.module.scss'

type PropsType = {
  trackData: TrackType
  setCurrentTrack: Dispatch<SetStateAction<TrackType | undefined>>
}

const TrackListItem = ({ trackData, setCurrentTrack }: PropsType) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li onClick={() => setCurrentTrack(trackData)} className={s.trackListRow}>
      <div className={s.trackListRowCol1}>
        <img src={cover} alt="Album cover" />
        {trackData.name}
      </div>
      <div className={s.trackListRowCol2}>{trackData.author}</div>
      <div className={s.trackListRowCol3}>{trackData.album}</div>
      <div className={s.trackListRowCol4}>
        <svg className={s.like}>
          <use xlinkHref={`${sprite}#icon-like`} />
        </svg>

        {formatTrackTime(trackData.duration_in_seconds)}
      </div>
    </li>
  )
}

export default TrackListItem
