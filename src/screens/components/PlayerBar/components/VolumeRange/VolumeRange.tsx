import s from './VolumeRange.module.scss'
import './range.scss'
import sprite from '@/img/sprite.svg'

const VolumeRange = () => {
  return (
    <div className={s.volumeBox}>
      <svg className={s.volumeBoxSvg}>
        <use xlinkHref={`${sprite}#icon-volume`} />
      </svg>
      <input type="range" min="0" max="100" name="range" step="1" />
    </div>
  )
}

export default VolumeRange
