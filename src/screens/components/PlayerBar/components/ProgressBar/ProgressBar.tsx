import * as React from 'react'
import { HTMLMediaState } from 'react-use/lib/factory/createHTMLMediaHook'
import * as S from './ProgressBar.style'
import { ControlsType } from '@/types'

type PropsType = {
  state: HTMLMediaState
  controls: ControlsType
}

const ProgressBar = ({
  state: { time, duration },
  controls: { seek },
}: PropsType) => {
  const progressBox = React.useRef<HTMLDivElement>(null)

  const handleSeekClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (progressBox.current) {
      const fullWidth = progressBox.current.clientWidth
      const clickPosition = event.clientX
      const trackSeekPosition =
        Math.round((clickPosition / fullWidth) * 10000) / 10000
      seek(duration * trackSeekPosition)
    }
  }

  return (
    <S.ProgressBarBox ref={progressBox} onClick={handleSeekClick}>
      <S.ProgressBar time={time} duration={duration} />
    </S.ProgressBarBox>
  )
}

export default ProgressBar
