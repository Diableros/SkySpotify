import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userInitialState = {
	login: false,
	id: 0,
	token: '',
	userName: '',
	email: '',
};

export type UserStateType = typeof userInitialState;

const userSlice = createSlice({
	name: 'user',
	initialState: userInitialState,
	reducers: {
		userLogin(state, action: PayloadAction<UserStateType>) {
			return {
				login: true,
				id: action.payload.id,
				token: action.payload.token,
				userName: action.payload.userName,
				email: action.payload.email,
			};
		},
		userLogout() {
			return userInitialState;
		},
	},
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
