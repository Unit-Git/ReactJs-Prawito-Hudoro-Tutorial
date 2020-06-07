import React from 'react';

const Post = (props) => {
	return (
		<div className='section-post'>
			<div className='img-thumb'>
				<img src='http://placeimg.com/200/150/tech' alt='' />
			</div>
			<div className='content'>
				<button
					onClick={() => props.onDelete(props.data.id)}
					className='btn-remove '>
					{' '}
					Remove{' '}
				</button>
				<p className='title'>{props.data.title}</p>
				<div className='desc'>{props.data.body}</div>
			</div>
		</div>
	);
};

export default Post;
