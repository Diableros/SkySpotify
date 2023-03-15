import * as React from 'react';
import s from './HeaderButton.module.scss';

export enum ButtonType {
  Author = 'исполнителю',
  Year = 'году выпуска',
  Genre = 'жанру',
}

const HeaderButton = ({ type }: { type: ButtonType }) => {
  return (
    <button className={s.searchBtn} type="button">
      {type}
    </button>
  );
};

export default HeaderButton;
