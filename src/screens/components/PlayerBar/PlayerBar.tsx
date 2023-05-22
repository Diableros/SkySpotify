import { useAudio } from 'react-use'
import ControlBox from './components/ControlBox/ControlBox'
import TrackBox from './components/TrackBox/TrackBox'
import VolumeRange from './components/VolumeRange/VolumeRange'
import * as S from './PlayerBar.style'
import ProgressBar from './components/ProgressBar'
import useCurrentTrack from '@/hooks/useCurrentTrack'
import useAppStore from '@/store/hooks/useAppStore'

const PlayerBar = () => {
  const { currentTrack } = useCurrentTrack()
  const isAutoplay = useAppStore('isAutoplay') as boolean

  const trackUrl = currentTrack?.track_file || ''

  const [audio, state, controls] = useAudio({
    src: trackUrl,
    autoPlay: isAutoplay,
  })

  // const stateInfo = (
  //   <S.CurrentTrackStateWrapper>
  //     <S.CurrentTrackState>
  //       {JSON.stringify(state, null, 2)}
  //     </S.CurrentTrackState>
  //   </S.CurrentTrackStateWrapper>
  // )

  return (
    <S.PlayerBarBox>
      {audio}
      {/* {stateInfo} */}
      <ProgressBar {...state} />
      <S.PlayerBar>
        <ControlBox controls={controls} state={state} />
        <TrackBox />
        <VolumeRange {...controls} />
      </S.PlayerBar>
    </S.PlayerBarBox>
  )
}

export default PlayerBar
