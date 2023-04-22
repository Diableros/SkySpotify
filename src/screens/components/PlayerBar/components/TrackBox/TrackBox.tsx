import * as React from 'react'
import s from './TrackBox.module.scss'
import cover from '@/img/blank_cover.png'
import sprite from '@/img/sprite.svg'
import { TrackType } from '@/types'

type PropsType = {
  currentTrack: TrackType
}

const TrackBox = ({ currentTrack: { name, author } }: PropsType) => {
  return (
    <div className={s.TrackBox}>
      <img className={s.cover} src={cover} alt="Album cover" />
      <div className={s.TrackInfo}>
        <div className={s.TrackInfoTitle}>{name}</div>
        <div className={s.TrackInfoAutor}>{author}</div>
      </div>
      <div className={s.reactionsBox}>
        <button type="button" className={s.reactionsButton}>
          <svg className={s.reactionsSvg}>
            <use xlinkHref={`${sprite}#icon-like`} />
          </svg>
        </button>
        <button type="button" className={s.reactionsButton}>
          <svg className={s.reactionsSvgBig}>
            <use xlinkHref={`${sprite}#icon-dislike`} />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TrackBox
