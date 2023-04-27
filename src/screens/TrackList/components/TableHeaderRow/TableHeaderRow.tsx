import * as React from 'react'
import s from '../../TrackList.module.scss'
import sprite from '@/img/sprite.svg'

const TableHeaderRow = () => {
  return (
    <div className={s.trackListHeader}>
      <div className={s.trackListRowCol1}>Трек</div>
      <div className={s.trackListRowCol2}>Исполнитель</div>
      <div className={s.trackListRowCol3}>Альбом</div>
      <div className={s.trackListRowCol4}>
        <svg className={s.trackListHeaderSvg}>
          <use xlinkHref={`${sprite}#icon-watch`} />
        </svg>
      </div>
    </div>
  )
}

export default TableHeaderRow
