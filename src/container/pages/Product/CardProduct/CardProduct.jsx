import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component {
	constructor(props) {
		super(props);
		this.input = React.createRef();
	}

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
				<Counter
					onCounterChange={(value) => this.props.onCounterChange(value)}
				/>
			</div>
		);
	}
}

export default CardProduct;
