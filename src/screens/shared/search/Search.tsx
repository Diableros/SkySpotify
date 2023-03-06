import s from './Search.module.scss';
import sprite from '@/img/sprite.svg';

const Search = () => {
  return (
    <div className={s.searchBox}>
      <svg className={s.searchSvg}>
        <use xlinkHref={`${sprite}#icon-search`} />
      </svg>
      <input
        className={s.search}
        type="search"
        name="search"
        placeholder="Поиск"
      />
    </div>
  );
};

export default Search;
