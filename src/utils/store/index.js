import { configureStore } from "@reduxjs/toolkit";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authentication from "./authentication";

const store = configureStore({
	reducer: {
		authentication: authentication.reducer,
	},
});

export default store;
