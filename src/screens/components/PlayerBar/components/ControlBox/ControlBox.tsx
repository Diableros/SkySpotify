import * as React from 'react'
import { HTMLMediaState } from 'react-use/lib/factory/createHTMLMediaHook'
import * as S from './ControlBox.style'
import { ControlsType, TrackType } from '@/types'
import Icon from '@/screens/components/Icon'
import IconSprite from '@/screens/components/Icon/enum'
import useTrackSwitch from '@/hooks/useTrackSwitch'

type PropsType = {
  controls: ControlsType
  state: HTMLMediaState
  setCurrentTrack: React.Dispatch<React.SetStateAction<TrackType>>
}

const ControlBox = ({
  controls: { play, pause },
  state: { paused },
  setCurrentTrack,
}: PropsType) => {
  const [prev, next, currentTrack] = useTrackSwitch()
  const [isPlaying, setIsPlaying] = React.useState<boolean>(!paused)

  const handlePlay = () => {
    play()?.then(() => setIsPlaying(true))
  }

  const handlePause = () => {
    pause()
    setIsPlaying(false)
  }

  React.useEffect(() => setIsPlaying(!paused), [paused])
  React.useEffect(
    () => setCurrentTrack(currentTrack),
    [currentTrack, setCurrentTrack]
  )

  return (
    <S.ControlPanel>
      <S.ControlButton type="button" onClick={prev}>
        <Icon icon={IconSprite.Prev} size="20px" />
      </S.ControlButton>

      {isPlaying ? (
        <S.ControlButton type="button" onClick={handlePause}>
          <Icon icon={IconSprite.Pause} size="20px" />
        </S.ControlButton>
      ) : (
        <S.ControlButton type="button" onClick={handlePlay}>
          <Icon icon={IconSprite.Play} size="20px" />
        </S.ControlButton>
      )}

      <S.ControlButton type="button" onClick={next}>
        <Icon icon={IconSprite.Next} size="20px" />
      </S.ControlButton>

      <S.ControlButtonSecondary type="button">
        <Icon icon={IconSprite.Loop} size="16px" />
      </S.ControlButtonSecondary>

      <S.ControlButtonSecondary type="button">
        <Icon icon={IconSprite.Shuffle} size="16px" />
      </S.ControlButtonSecondary>
    </S.ControlPanel>
  )
}

export default ControlBox
