import s from './MainHeader.module.scss';

const MainHeader = () => {
  return (
    <div className={s.header}>
      <h1 className={s.title}>Треки</h1>
      <div className={s.sortBox}>
        <p className={s.sortBoxtext}>Искать по:</p>
        <button className={s.sortBoxbutton}>исполнителю</button>
        <button className={s.sortBoxbutton}>году выпуска</button>
        <button className={s.sortBoxbutton}>жанру</button>
      </div>
    </div>
  );
};

export default MainHeader;
