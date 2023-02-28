import ky from 'ky';

const BASE_API_URL = 'https://painassasin.online/';
const LOGIN = process.env.REACT_APP_LOGIN || '';
const EMAIL = process.env.REACT_APP_EMAIL || '';
const PASSWORD = process.env.REACT_APP_PASSWORD || '';

export const req = async (): Promise<SongType[]> => {
	return await ky(BASE_API_URL + 'catalog/track/all/').json();
};
