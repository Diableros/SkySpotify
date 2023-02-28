import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userInitialState: UserStateType = {
	id: 0,
	token: '',
	userName: '',
	email: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState: userInitialState,
	reducers: {
		userLogin(state, action: PayloadAction<UserStateType>) {
			state = {
				id: action.payload.id,
				token: action.payload.token,
				userName: action.payload.userName,
				email: action.payload.email,
			};
		},
		userLogout(state) {
			state = userInitialState;
		},
	},
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
