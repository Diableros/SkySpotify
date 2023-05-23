import * as React from 'react'
import { HTMLMediaState } from 'react-use/lib/factory/createHTMLMediaHook'
import * as S from './ControlBox.style'
import { ControlsType, LoopShuffleControlsType } from '@/types'
import Icon from '@/screens/components/Icon'
import IconSprite from '@/screens/components/Icon/enum'
import useTrackSwitch from '@/hooks/useTrackSwitch'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { setIsAutoplay } from '@/store/appSlice'

type PropsType = {
  controls: ControlsType & LoopShuffleControlsType
  state: HTMLMediaState
}

const ControlBox = ({
  controls: { play, pause, isLoop, setIsLoop, isShuffle, setIsShuffle },
  state: { paused },
}: PropsType) => {
  const dispatch = useAppDispatch()
  const { prev, next } = useTrackSwitch()
  const [isPlaying, setIsPlaying] = React.useState<boolean>(!paused)

  const handlePlay = React.useCallback(() => {
    play()?.then(() => {
      setIsPlaying(true)
      dispatch(setIsAutoplay(true))
    })
  }, [play, dispatch])

  const handlePause = React.useCallback(() => {
    pause()
    setIsPlaying(false)
    dispatch(setIsAutoplay(false))
  }, [pause, dispatch])

  React.useEffect(() => setIsPlaying(!paused), [paused])

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

      <S.ControlButton type="button" onClick={() => next(isShuffle)}>
        <Icon icon={IconSprite.Next} size="20px" />
      </S.ControlButton>

      <S.ControlButtonSecondary
        type="button"
        onClick={() => setIsLoop((prevState) => !prevState)}
      >
        <Icon icon={IconSprite.Loop} size="20px" isActive={isLoop} />
      </S.ControlButtonSecondary>

      <S.ControlButtonSecondary
        type="button"
        onClick={() => setIsShuffle((prevState) => !prevState)}
      >
        <Icon icon={IconSprite.Shuffle} size="20px" isActive={isShuffle} />
      </S.ControlButtonSecondary>
    </S.ControlPanel>
  )
}

export default ControlBox
