import * as React from 'react'
import { useAudio } from 'react-use'
import clsx from 'clsx'
import ControlBox from './components/ControlBox/ControlBox'
import TrackBox from './components/TrackBox/TrackBox'
import VolumeRange from './components/VolumeRange/VolumeRange'
import s from './PlayerBar.module.scss'
import * as S from './PlayerBar.style'
import { TrackType } from '@/types'
import ProgressBar from './components/ProgressBar'

type PropsType = {
  currentTrack: TrackType
}

const PlayerBar = ({ currentTrack }: PropsType) => {
  const [audio, state, controls] = useAudio({
    src: currentTrack.track_file,
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
    <div className={clsx(s.playerBarBox, currentTrack && s.show)}>
      {audio}
      {/* {stateInfo} */}
      <ProgressBar {...state} />
      <div className={s.playerBar}>
        <ControlBox controls={controls} state={state} />
        <TrackBox currentTrack={currentTrack} />
        <VolumeRange {...controls} />
      </div>
    </div>
  )
}

export default PlayerBar
