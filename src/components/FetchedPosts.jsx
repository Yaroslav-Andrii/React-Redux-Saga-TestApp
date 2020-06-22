import React from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';

const FetchedPosts = () => {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts.fetchedPosts)
	const loading = useSelector(state => state.app.loading)

	if (loading) {
		return (
			<div className="d-flex justify-content-center">
				<div className="spinner-border text-primary" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		)
	}

	return (
		posts.length 
			? posts.map(post => <Post key={post.id} post={post}/>) 
			: <button onClick={e => dispatch( fetchPosts() )} className="btn btn-primary"><strong>Download</strong></button>
	)
};

export default FetchedPosts;