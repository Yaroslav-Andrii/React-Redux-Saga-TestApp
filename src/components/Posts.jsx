import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = ({ syncPosts }) => (
	syncPosts.length 
		? syncPosts.map(post => <Post key={post.id} post={post}/>) 
		: <h5>Posts list is empty</h5>
);

const mapStateToProps = state => {
	return {
		syncPosts: state.posts.posts
	}
}

export default connect(mapStateToProps, null )(Posts);