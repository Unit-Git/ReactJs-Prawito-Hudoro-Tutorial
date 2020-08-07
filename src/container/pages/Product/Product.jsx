import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';
import { GlobalConsumer } from '../../../context/Context';

// import { connect } from 'react-redux';

class Product extends Component {
	// state = {
	// 	order: 4,
	// };

	// heandleCounterChange = (newValue) => {
	// 	this.setState({
	// 		order: newValue,
	// 	});
	// };

	render() {
		const { state } = this.props;
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
						<div className='count'>{state.totalOrder}</div>
					</div>
				</div>
				<CardProduct />
			</Fragment>
		);
	}
}

// const mapStateToProps = state => {
// 	return {
// 		order: state.totalOrder,
// 	};
// };
export default GlobalConsumer(Product);
// export default connect(mapStateToProps)(Product);
