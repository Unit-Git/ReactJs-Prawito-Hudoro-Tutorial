import React, { Component } from 'react';
import './LifeCycleComp.scss';

export default class LifeCycleComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1
		};
	}

	onChangeCount = () => {
		this.setState({
			count: this.state.count + 1
		});
	};

	render() {
		return (
			<button className='btn' onClick={this.onChangeCount}>
				Component Button {this.state.count}{' '}
			</button>
		);
	}
}
