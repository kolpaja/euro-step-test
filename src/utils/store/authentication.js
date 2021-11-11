import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const authentication = createSlice({
	name: "authentication",
	initialState: null,
	reducers: {
		setUsername: (state, action) => {
			state.user.username = action.payload;
		},
	},
});

export default authentication;
