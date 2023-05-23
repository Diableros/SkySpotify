import * as React from 'react'
import { useAudio } from 'react-use'
import ControlBox from './components/ControlBox/ControlBox'
import TrackBox from './components/TrackBox/TrackBox'
import VolumeRange from './components/VolumeRange/VolumeRange'
import * as S from './PlayerBar.style'
import ProgressBar from './components/ProgressBar'
import useCurrentTrack from '@/hooks/useCurrentTrack'
import useAppStore from '@/store/hooks/useAppStore'
import useTrackSwitch from '@/hooks/useTrackSwitch'
import { LoopShuffleControlsType } from '@/types'

const SHOW_TRACK_STATE_INFO = false

const PlayerBar = () => {
  const [isLoop, setIsLoop] = React.useState<boolean>(false)
  const [isShuffle, setIsShuffle] = React.useState<boolean>(false)
  const { currentTrack } = useCurrentTrack()
  const isAutoplay = useAppStore('isAutoplay') as boolean
  const { next } = useTrackSwitch()

  const trackUrl = currentTrack?.track_file || ''

  const [audio, state, controls] = useAudio({
    src: trackUrl,
    autoPlay: isAutoplay,
    onEnded: () => {
      next(isShuffle)
    },
    loop: isLoop,
  })

  const LoopShuffleControls: LoopShuffleControlsType = {
    isLoop,
    setIsLoop,
    isShuffle,
    setIsShuffle,
  }

  const stateInfo = (
    <S.CurrentTrackStateWrapper>
      <S.CurrentTrackState>
        {JSON.stringify(state, null, 2)}
      </S.CurrentTrackState>
    </S.CurrentTrackStateWrapper>
  )

  return (
    <S.PlayerBarBox>
      {audio}
      {SHOW_TRACK_STATE_INFO && stateInfo}
      <ProgressBar state={state} controls={controls} />
      <S.PlayerBar>
        <ControlBox
          controls={{ ...controls, ...LoopShuffleControls }}
          state={state}
        />
        <TrackBox />
        <VolumeRange {...controls} />
      </S.PlayerBar>
    </S.PlayerBarBox>
  )
}

export default PlayerBar
