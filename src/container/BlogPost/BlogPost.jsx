import React, { Component, Fragment } from 'react';
import CardPost from './CardPost/CardPost';
import './BlogPost.scss';
import Axios from 'axios';

export default class BlogPost extends Component {
	state = {
		post: [],
	};

	handleLoadData = () => {
		Axios.get('http://localhost:5000/posts')
			.then((res) => {
				this.setState({
					post: res.data,
				});
			})
			.catch((err) => console.log(err));
	};

	handleRemove = (id) => {
		Axios.delete('http://localhost:5000/posts/' + id).then((res) => {
			alert('Data Berhasil diHapus!');
			this.handleLoadData();
		});
	};

	componentDidMount() {
		this.handleLoadData();
	}

	render() {
		return (
			<Fragment>
				<h5 className='title-section'>History Post</h5>
				{this.state.post.map((post) => {
					return (
						<CardPost key={post.id} data={post} onDelete={this.handleRemove} />
					);
				})}
			</Fragment>
		);
	}
}
