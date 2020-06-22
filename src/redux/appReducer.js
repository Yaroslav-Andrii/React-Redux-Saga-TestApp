import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types"

const initialState = {
	loading: false,
	alert: null,
}

const handlers = {
	[SHOW_LOADER]: state => ({...state, loading: true}),
	[HIDE_LOADER]: state => ({...state, loading: false}),
	[SHOW_ALERT]: (state, {payload}) => ({...state, alert: payload}),
	[HIDE_ALERT]: (state, {payload}) => ({...state, alert: null}),

	DEFAULT: state => state,
}

export const appReducer = (state = initialState, action) => {
	const handle = handlers[action.type] || handlers.DEFAULT;
	return handle(state, action);
}