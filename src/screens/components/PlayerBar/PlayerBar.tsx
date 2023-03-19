import * as React from 'react'
import ControlBox from './components/ControlBox/ControlBox'
import SongBox from './components/SongBox/SongBox'
import VolumeRange from './components/VolumeRange/VolumeRange'
import s from './PlayerBar.module.scss'

const PlayerBar = () => {
  return (
    <div className={s.playerBarBox}>
      <div className={s.progressBar} />
      <div className={s.playerBar}>
        <ControlBox />
        <SongBox />
        <VolumeRange />
      </div>
    </div>
  )
}

export default PlayerBar
