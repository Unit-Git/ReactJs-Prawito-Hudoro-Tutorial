import React, { Component, Fragment } from 'react';
import Axios from 'axios';

class DetailPost extends Component {
	state = {
		posts: {
			title: '',
			body: '',
		},
	};

	handleLoadDetail = (postId) => {
		Axios.get('http://localhost:5000/posts/' + postId)
			.then((res) => {
				let { title, body } = res.data;

				this.setState({
					posts: {
						title: title,
						body: body,
					},
				});
			})
			.catch((err) => console.log(err));
	};

	componentDidMount() {
		// console.log(this.props.match.params.id);
		const postId = this.props.match.params.id;

		this.handleLoadDetail(postId);
	}

	render() {
		return (
			<Fragment>
				<div>
					<h1>{this.state.posts.title}</h1>
					<br />
					<p>{this.state.posts.body}</p>
				</div>
			</Fragment>
		);
	}
}

export default DetailPost;
