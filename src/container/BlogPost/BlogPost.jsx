import React, { Component, Fragment } from 'react';
import CardPost from './CardPost/CardPost';
import './BlogPost.scss';
import Axios from 'axios';

export default class BlogPost extends Component {
	state = {
		post: [],
		formBlogPost: {
			id: '',
			title: '',
			body: '',
			userId: 1,
		},
	};

	handleLoadData = () => {
		Axios.get('http://localhost:5000/posts?_sort=id&_order=desc')
			.then((res) => {
				this.setState({
					post: res.data,
				});
			})
			.catch((err) => console.log(err));
	};

	postDataToApi = (title, body) => {
		Axios.post('http://localhost:5000/posts', this.state.formBlogPost).then(
			(res) => {
				title.value = '';
				body.value = '';
				this.handleLoadData();
				console.log(res);
			}
		);
	};

	handleRemove = (id) => {
		Axios.delete('http://localhost:5000/posts/' + id).then((res) => {
			this.handleLoadData();
		});
	};

	handleFormChange = (event) => {
		let formBlogPostNew = { ...this.state.formBlogPost };
		let timeStamp = new Date().getTime();
		formBlogPostNew['id'] = timeStamp;
		formBlogPostNew[event.target.name] = event.target.value;
		this.setState({
			formBlogPost: formBlogPostNew,
		});
	};

	handleSubmit = () => {
		const title = document.querySelector('#title');
		const body = document.querySelector('#body');
		this.postDataToApi(title, body);
	};

	componentDidMount() {
		this.handleLoadData();
	}

	render() {
		return (
			<Fragment>
				<h5 className='title-section'>History Post</h5>
				<div className='main--content'>
					<div className='col--data'>
						{this.state.post.map((post) => {
							return (
								<CardPost
									key={post.id}
									data={post}
									onDelete={this.handleRemove}
								/>
							);
						})}
					</div>
					<div className='form--post'>
						<div className='form--group'>
							<label htmlFor='title'>Title</label>
							<br />
							<input
								className='form--input'
								type='text'
								name='title'
								id='title'
								placeholder='Title'
								onChange={this.handleFormChange}
							/>
						</div>
						<br />
						<br />
						<div className='form--group'>
							<label htmlFor='body'>Contents</label>
							<br />
							<textarea
								className='form--input'
								name='body'
								id='body'
								cols='30'
								rows='10'
								onChange={this.handleFormChange}></textarea>
						</div>
						<br />
						<button className='submit' onClick={this.handleSubmit}>
							Tambah
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}
