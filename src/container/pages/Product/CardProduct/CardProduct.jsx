import React, { Component } from 'react';

class CardProduct extends Component {
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
			<div className='card'>
				<div className='img-thumb-grid'>
					<img
						src='https://etanee-images.s3-ap-southeast-1.amazonaws.com/Ayam+Berbumbu+Pedas.jpg'
						alt=''
					/>
				</div>
				<p className='product-title'>
					Daging Ayam Berbumbu Rasa Pedas plus Tepung Crispy [1 Carton - 5 Pack]
				</p>
				<p className='product-price'>Rp. 250,000</p>
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
			</div>
		);
	}
}

export default CardProduct;
