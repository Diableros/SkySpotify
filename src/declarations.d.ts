type LoginFieldsType = {
	email: string;
	password: string;
	passwordConfirm?: string;
};

type UserDataType = {
	id: id;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
};

type SongType = {
	id: 8;
	name: string;
	author: string;
	release_date: string;
	genre: string;
	duration_in_seconds: 205;
	album: string;
	logo: null;
	track_file: string;
	stared_user: UserDataType;
};
