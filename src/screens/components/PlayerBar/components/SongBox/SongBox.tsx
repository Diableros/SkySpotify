import * as React from 'react'
import s from './SongBox.module.scss'
import cover from '@/img/blank_cover.png'
import sprite from '@/img/sprite.svg'

const SongBox = () => {
  return (
    <div className={s.songBox}>
      <img className={s.cover} src={cover} alt="Album cover" />
      <div className={s.songInfo}>
        <div className={s.songInfoTitle}>Chase</div>
        <div className={s.songInfoAutor}>Alexander Nakarada</div>
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

export default SongBox
