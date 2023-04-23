import * as React from 'react'
import s from './VolumeRange.module.scss'
import './range.scss'
import sprite from '@/img/sprite.svg'
import { ControlsType } from '@/types'

const INITIAL_VOLUME_LEVEL = 50
const PERCENT = 100

const VolumeRange = ({
  volume,
  mute: setMute,
  unmute: setUnmute,
}: ControlsType) => {
  const [isMute, setIsMute] = React.useState<boolean>(false)

  const handlerVolumeChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const range = e.target
    const rangeValue = Number(range.value) / PERCENT
    volume(rangeValue)

    if (rangeValue === 0) {
      setIsMute(true)
    } else {
      setIsMute(false)
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => volume(INITIAL_VOLUME_LEVEL / PERCENT), [])

  const handleSetMute = () => {
    setIsMute(true)
    setMute()
  }

  const handleSetUnMute = () => {
    setIsMute(false)
    setUnmute()
  }

  return (
    <div className={s.volumeBox}>
      {!isMute ? (
        <svg className={s.volumeBoxSvg} onClick={handleSetMute}>
          <use xlinkHref={`${sprite}#icon-volume`} />
        </svg>
      ) : (
        <svg className={s.volumeBoxSvg} onClick={handleSetUnMute}>
          <use xlinkHref={`${sprite}#icon-mute`} />
        </svg>
      )}
      <input
        type="range"
        min="0"
        max="100"
        name="range"
        step="5"
        onChange={handlerVolumeChange}
        defaultValue={INITIAL_VOLUME_LEVEL}
      />
    </div>
  )
}

export default VolumeRange
