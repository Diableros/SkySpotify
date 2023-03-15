import HeaderButton, { ButtonType } from './HeaderButton/HeaderButton';
import s from './MainHeader.module.scss';
// import  from './HeaderButton/HeaderButton';

const MainHeader = () => {
  return (
    <div className={s.header}>
      <h1 className={s.title}>Треки</h1>
      <div className={s.sortBox}>
        <p className={s.sortBoxtext}>Искать по:</p>
        <HeaderButton type={ButtonType.Author} />
        <HeaderButton type={ButtonType.Year} />
        <HeaderButton type={ButtonType.Genre} />
      </div>
    </div>
  );
};

export default MainHeader;
