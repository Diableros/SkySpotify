import * as React from 'react';
import ControlBox from './components/controlBox/ControlBox';
import SongBox from './components/songBox/SongBox';
import VolumeRange from './components/volumeRange/VolumeRange';
import s from './PlayerBar.module.scss';

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
  );
};

export default PlayerBar;
