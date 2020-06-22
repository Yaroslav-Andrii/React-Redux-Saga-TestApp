import React from 'react';

export default ({ post }) => (
	<div className="card mb-3" style={{width: "18rem"}}>
		<div className="card-body">
			<h5 className="card-title">{post.title}</h5>
			<p className="card-text">{post.body}</p>
		</div>
	</div>
)