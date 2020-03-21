import React, { Component, Fragment } from 'react';
import CardPost from './CardPost/CardPost';
import './BlogPost.scss';
import Axios from 'axios';

export default class BlogPost extends Component {
	state = {
		post: []
	};

	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/posts')
		// 	.then(response => response.json())
		// 	.then(json => {
		// 		this.setState({
		// 			post: json
		// 		});
		// 	});

		Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
			this.setState({
				post: res.data
			});
		});
	}

	render() {
		return (
			<Fragment>
				<h5 className='title-section'>History Post</h5>
				{this.state.post.map(dataPost => {
					return (
						<CardPost
							key={dataPost.id}
							title={dataPost.title}
							desc={dataPost.body}
						/>
					);
				})}
			</Fragment>
		);
	}
}
