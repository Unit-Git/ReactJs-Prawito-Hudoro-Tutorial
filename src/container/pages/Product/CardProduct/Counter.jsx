import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.input = React.createRef();
	}
	state = {
		order: 4,
		name: 'akbar',
	};

	heandleCounterChange = (newValue) => {
		this.props.onCounterChange(newValue);
		this.input.current.value = this.state.order;
	};

	heandlePlus = () => {
		this.setState(
			{
				order: this.state.order + 1,
			},
			() => {
				this.heandleCounterChange(this.state.order);
			}
		);
	};
	heandleMinus = () => {
		if (this.state.order > 1) {
			this.setState(
				{
					order: this.state.order - 1,
				},
				() => {
					this.heandleCounterChange(this.state.order);
				}
			);
		}
	};

	render() {
		return (
			<div className='counter'>
				<button className='minus' onClick={this.heandleMinus}>
					-
				</button>
				<input
					className='input-counter'
					type='text'
					defaultValue={this.state.order}
					ref={this.input}
				/>

				<button className='plus' onClick={this.heandlePlus}>
					+
				</button>
			</div>
		);
	}
}

export default Counter;
