import useCurrentTrack from '@/hooks/useCurrentTrack'
import ControlBox from './components/ControlBox/ControlBox'
import TrackBox from './components/TrackBox/TrackBox'
import VolumeRange from './components/VolumeRange/VolumeRange'
import s from './PlayerBar.module.scss'

const PlayerBar = () => {
  const currentTrack = useCurrentTrack()

  return (
    <div className={s.playerBarBox}>
      <div className={s.progressBar} />
      <div className={s.playerBar}>
        <ControlBox />
        <TrackBox />
        <VolumeRange />
      </div>
    </div>
  )
}

export default PlayerBar
