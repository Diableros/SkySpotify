import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const interfaceInitialState = {
	showMenu: false,
};

export type InterfaceStateType = typeof interfaceInitialState;

const interfaceSlice = createSlice({
	name: 'interface',
	initialState: interfaceInitialState,
	reducers: {
		toggleShowMenu(state) {
			state.showMenu = !state.showMenu;
		},
	},
});

export const { toggleShowMenu } = interfaceSlice.actions;

export default interfaceSlice.reducer;
