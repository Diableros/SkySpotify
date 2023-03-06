import * as React from 'react';
import s from './ControlBox.module.scss';
import sprite from '@/img/sprite.svg';

const ControlBox = () => {
  return (
    <div className={s.controlPanel}>
      <button type="button" className={s.controlButton}>
        <svg className={s.controlSvg}>
          <use xlinkHref={`${sprite}#icon-prev`} />
        </svg>
      </button>
      <button type="button" className={s.controlButton}>
        <svg className={s.controlSvgBig}>
          <use xlinkHref={`${sprite}#icon-play`} />
        </svg>
      </button>
      <button type="button" className={s.controlButton}>
        <svg className={s.controlSvg}>
          <use xlinkHref={`${sprite}#icon-next`} />
        </svg>
      </button>
      <button type="button" className={s.controlButton}>
        <svg className={s.controlSvg}>
          <use xlinkHref={`${sprite}#icon-loop`} />
        </svg>
      </button>
      <button type="button" className={s.controlButton}>
        <svg className={s.controlSvg}>
          <use xlinkHref={`${sprite}#icon-shuffle`} />
        </svg>
      </button>
    </div>
  );
};

export default ControlBox;
