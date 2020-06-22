import { 
	CREATE_POST, 
	FETCH_POSTS, 
	SHOW_LOADER, 
	HIDE_LOADER, 
	SHOW_ALERT, 
	HIDE_ALERT
} from "./types";

export const createPosts = post => {
	return {
		type: CREATE_POST,
		payload: post
	}
} ;

export const showLoader = () => ({type: SHOW_LOADER});
export const hideLoader = () => ({type: HIDE_LOADER});
export const hideAlert = () => ({type: HIDE_ALERT});

export const showAlert = alert => {
	return dispatch => {
		dispatch({type: SHOW_ALERT, payload: alert});

		setTimeout(()=> {
			dispatch( hideAlert() )
		}, 2000)
	}
}
export const fetchPosts = () => {
	return async dispatch => {
		try {
			dispatch( showLoader() );

			const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
			const json = await res.json();

			setTimeout(() => {

				dispatch({
					type: FETCH_POSTS,
					payload: json
				});
				dispatch( hideLoader() );

			}, 2000)
		} catch (error) {
			dispatch( showAlert(error.message) )
			dispatch( hideLoader() )
		} 
	}
}