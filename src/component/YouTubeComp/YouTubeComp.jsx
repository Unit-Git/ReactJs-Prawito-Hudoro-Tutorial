import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = props => {
	return (
		<div className='youtube-wrapper'>
			<div className='img-thumb'>
				<img
					src='https://i.ytimg.com/vi/5kHyviqjhCk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBf_pPpsU1q-CvByGrW5v0W79AXJg'
					alt=''
				/>
				<p className='time'>{props.time}</p>
			</div>
			<p className='title'>{props.title}</p>
			<p className='desc'>{props.desc}</p>
		</div>
	);
};

YouTubeComp.defaultProps = {
	time: '00.00',
	title: 'Title Tutorial ReactJs Bahasa Indonesia',
	desc: 'x x ditonton, x xxx yang lalu'
};

export default YouTubeComp;
