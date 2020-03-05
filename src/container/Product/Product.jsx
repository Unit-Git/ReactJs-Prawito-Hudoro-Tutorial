import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
	state = {
		order: 4
	};

	heandleCounterChange = newValue => {
		this.setState({
			order: newValue
		});
	};

	render() {
		return (
			<Fragment>
				<div className='header'>
					<div className='logo'>
						<img
							src='https://www.etanee.id/img/content/img_logo_etanee_white.png'
							alt=''
						/>
					</div>
					<div className='troley'>
						<img
							src='https://www.etanee.id/img/icon/ic_cart_white.svg'
							alt=''
						/>
						<div className='count'>{this.state.order}</div>
					</div>
				</div>
				<CardProduct
					onCounterChange={value => {
						this.heandleCounterChange(value);
					}}
				/>
			</Fragment>
		);
	}
}

export default Product;