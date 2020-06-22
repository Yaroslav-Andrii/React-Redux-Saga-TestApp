import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST_POSTS, FETCH_POSTS } from './types';
import { showLoader, hideLoader } from './actions';

export function *sagaWatcher() {
	yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function *sagaWorker() {
	yield put(showLoader())
	const payload = yield call(fetchPosts)
	yield put({
		type: FETCH_POSTS,
		payload
	})
	yield put(hideLoader())
}

async function fetchPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
	return await res.json();
}