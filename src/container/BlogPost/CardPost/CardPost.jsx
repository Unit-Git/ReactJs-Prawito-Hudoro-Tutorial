import React from 'react';

const Post = props => {
	return (
		<div className='section-post'>
			<div className='img-thumb'>
				<img src='http://placeimg.com/200/150/tech' alt='' />
			</div>
			<div className='content'>
				<p className='title'>{props.title}</p>
				<div className='desc'>{props.desc}</div>
			</div>
		</div>
	);
};

export default Post;
