import * as React from 'react'
import { useAudio } from 'react-use'
import ControlBox from './components/ControlBox/ControlBox'
import TrackBox from './components/TrackBox/TrackBox'
import VolumeRange from './components/VolumeRange/VolumeRange'
import * as S from './PlayerBar.style'
import { TrackType } from '@/types'
import ProgressBar from './components/ProgressBar'

type PropsType = {
  currentTrack: TrackType
}

const PlayerBar = ({ currentTrack }: PropsType) => {
  const [newCurrentTrack, setNewCurrentTrack] =
    React.useState<TrackType>(currentTrack)

  const [audio, state, controls] = useAudio({
    src: newCurrentTrack.track_file,
    autoPlay: false,
  })

  // const stateInfo = (
  //   <S.CurrentTrackStateWrapper>
  //     <S.CurrentTrackState>
  //       {JSON.stringify(state, null, 2)}
  //     </S.CurrentTrackState>
  //   </S.CurrentTrackStateWrapper>
  // )

  return (
    <S.PlayerBarBox isShow={!!currentTrack}>
      {audio}
      {/* {stateInfo} */}
      <ProgressBar {...state} />
      <S.PlayerBar>
        <ControlBox
          controls={controls}
          state={state}
          setCurrentTrack={setNewCurrentTrack}
        />
        <TrackBox currentTrack={newCurrentTrack} />
        <VolumeRange {...controls} />
      </S.PlayerBar>
    </S.PlayerBarBox>
  )
}

export default PlayerBar
