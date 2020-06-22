import { CREATE_POST, FETCH_POSTS } from "./types"

const initialState = {
	posts: [],
	fetchedPosts: [],
}

const handlers = {
	[CREATE_POST]: (state, action) => (
		{
			...state, 
			posts: state.posts.concat(action.payload)
		}
	),
	[FETCH_POSTS]: (state, action) => (
		{
			...state, 
			fetchedPosts: action.payload
		}
	),

	DEFAULT: state => state,
}

export const postsReducer = (state = initialState, action) => {
	const handle = handlers[action.type] || handlers.DEFAULT;
	return handle(state, action);
}