import * as React from 'react'
import { HTMLMediaState } from 'react-use/lib/factory/createHTMLMediaHook'
import s from './ControlBox.module.scss'
import sprite from '@/img/sprite.svg'
import { ControlsType } from '@/types'

const ControlBox = ({
  controls: { play, pause },
  state: { paused },
}: {
  controls: ControlsType
  state: HTMLMediaState
}) => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(!paused)

  const handlePlay = () => {
    setIsPlaying(true)
    play()
  }

  const handlePause = () => {
    setIsPlaying(false)
    pause()
  }

  React.useEffect(() => setIsPlaying(!paused), [paused])

  return (
    <div className={s.controlPanel}>
      <button type="button" className={s.controlButton}>
        <svg className={s.controlSvg}>
          <use xlinkHref={`${sprite}#icon-prev`} />
        </svg>
      </button>

      <button type="button" className={s.controlButton}>
        {isPlaying ? (
          <svg className={s.controlSvgBig} onClick={handlePause}>
            <use xlinkHref={`${sprite}#icon-pause`} />
          </svg>
        ) : (
          <svg className={s.controlSvgBig} onClick={handlePlay}>
            <use xlinkHref={`${sprite}#icon-play`} />
          </svg>
        )}
      </button>

      <button type="button" className={s.controlButton}>
        <svg className={s.controlSvg}>
          <use xlinkHref={`${sprite}#icon-next`} />
        </svg>
      </button>

      <button type="button" className={s.controlButton}>
        <svg className={s.controlSvg}>
          <use xlinkHref={`${sprite}#icon-loop`} />
        </svg>
      </button>

      <button type="button" className={s.controlButton}>
        <svg className={s.controlSvg}>
          <use xlinkHref={`${sprite}#icon-shuffle`} />
        </svg>
      </button>
    </div>
  )
}

export default ControlBox
