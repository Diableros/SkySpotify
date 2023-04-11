import clsx from 'clsx'
import useSongsQuery from '@/hooks/useSongsQuery'
import s from './TrackList.module.scss'
import sprite from '@/img/sprite.svg'
import cover from '@/img/blank_cover.png'
import formatTrackTime from '@/helpers/formatTrackTime'
import MainHeader from './components/MainHeader/MainHeader'
import Skeleton from './components/Skeleton'

const TrackList = () => {
  const { data, isLoading, isError } = useSongsQuery()

  const tableHeaderRow = (
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

  return (
    <>
      <MainHeader />
      {tableHeaderRow}
      <ul className={clsx(s.trackList, 'styled-scroll-bar')}>
        {data && !isLoading ? (
          data.map((elem) => (
            <li key={elem.id} className={s.trackListRow}>
              <div className={s.trackListRowCol1}>
                <img src={cover} alt="Album cover" />
                {elem.name}
              </div>
              <div className={s.trackListRowCol2}>{elem.author}</div>
              <div className={s.trackListRowCol3}>{elem.album}</div>
              <div className={s.trackListRowCol4}>
                <svg className={s.like}>
                  <use xlinkHref={`${sprite}#icon-like`} />
                </svg>

                {formatTrackTime(elem.duration_in_seconds)}
              </div>
            </li>
          ))
        ) : (
          <Skeleton quantity={7} />
        )}
      </ul>
    </>
  )
}

export default TrackList
