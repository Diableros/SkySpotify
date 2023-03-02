import * as React from 'react';
import { Link } from 'react-router-dom';
import s from './CollectionsNav.module.scss';
import img1 from 'img/collection_playlist_of_the_day.png';
import img2 from 'img/collection_100_dance_hits.png';
import img3 from 'img/collection_indi_charge.png';

const CollectionsNav = () => {
	return (
		<div className={s.collectionsNavBox}>
			<Link to="/">
				<img src={img1} alt="Playlist of the day" />
			</Link>
			<Link to="/">
				<img src={img2} alt="100 dance hits" />
			</Link>
			<Link to="/">
				<img src={img3} alt="Indi charge" />
			</Link>
		</div>
	);
};

export default CollectionsNav;
