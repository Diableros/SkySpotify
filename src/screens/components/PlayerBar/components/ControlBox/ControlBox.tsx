import * as React from 'react'
import { HTMLMediaState } from 'react-use/lib/factory/createHTMLMediaHook'
import * as S from './ControlBox.style'
import { ControlsType } from '@/types'
import Icon from '@/screens/components/Icon'
import IconSprite from '@/screens/components/Icon/enum'

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
    <S.ControlPanel>
      <S.ControlButton type="button">
        <Icon icon={IconSprite.Prev} size={20} />
      </S.ControlButton>

      {isPlaying ? (
        <S.ControlButton type="button" onClick={handlePause}>
          <Icon icon={IconSprite.Pause} size={24} />
        </S.ControlButton>
      ) : (
        <S.ControlButton type="button" onClick={handlePlay}>
          <Icon icon={IconSprite.Play} size={20} />
        </S.ControlButton>
      )}

      <S.ControlButton type="button">
        <Icon icon={IconSprite.Next} size={20} />
      </S.ControlButton>

      <S.ControlButtonSecondary type="button">
        <Icon icon={IconSprite.Loop} size={16} />
      </S.ControlButtonSecondary>

      <S.ControlButtonSecondary type="button">
        <Icon icon={IconSprite.Shuffle} size={16} />
      </S.ControlButtonSecondary>
    </S.ControlPanel>
  )
}

export default ControlBox
