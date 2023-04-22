import clsx from 'clsx'
import ControlBox from './components/ControlBox/ControlBox'
import TrackBox from './components/TrackBox/TrackBox'
import VolumeRange from './components/VolumeRange/VolumeRange'
import s from './PlayerBar.module.scss'
import useAppStore from '@/hooks/useAppStore'
import { TrackType } from '@/types'

const PlayerBar = () => {
  const currentTrack = useAppStore('currentTrack') as TrackType | undefined

  return (
    <div className={clsx(s.playerBarBox, currentTrack && s.show)}>
      <div className={s.progressBar} />
      <div className={s.playerBar}>
        <ControlBox />
        {currentTrack ? <TrackBox currentTrack={currentTrack} /> : null}
        <VolumeRange />
      </div>
    </div>
  )
}

export default PlayerBar
