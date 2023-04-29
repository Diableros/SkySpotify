import * as React from 'react'
import s from './TrackBox.module.scss'
import cover from '@/img/blank_cover.png'
import { TrackType } from '@/types'
import Icon from '@/screens/components/Icon'
import IconSprite from '@/screens/components/Icon/enum'

type PropsType = {
  currentTrack: TrackType
}

const TrackBox = ({ currentTrack: { name, author } }: PropsType) => {
  return (
    <div className={s.TrackBox}>
      <div className={s.reactionsBox}>
        <Icon icon={IconSprite.Like} size={24} />
        <Icon icon={IconSprite.Dislike} size={24} />
      </div>
      <img className={s.cover} src={cover} alt="Album cover" />
      <div className={s.TrackInfo}>
        <div className={s.TrackInfoTitle}>{name}</div>
        <div className={s.TrackInfoAutor}>{author}</div>
      </div>
    </div>
  )
}

export default TrackBox
