import * as React from 'react';
import s from './Search.module.scss';
import sprite from 'img/sprite.svg';

const Search = () => {
	return (
		<div className={s.search}>
			<svg className={s.searchSvg}>
				<use xlinkHref={sprite + 'icon-search'} />
			</svg>
		</div>
	);
};

export default Search;
