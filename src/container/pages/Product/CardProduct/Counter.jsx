import React, { Component, Fragment } from 'react';
import { GlobalConsumer } from '../../../../context/Context';
// import { RootContext } from '../../../Home/Home';
// import { connect } from 'react-redux';
// import ActionType from '../../../../redux/globalActionsType';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.counter = React.createRef();
	}
	componentDidMount() {
		this.counter.current.value = this.props.state.totalOrder;
	}

	render() {
		const { dispatch } = this.props;

		return (
			<Fragment>
				<div className='counter'>
					<button
						className='minus'
						onClick={() =>
							dispatch({ type: 'MINUS_ORDER', counterBox: this.counter })
						}>
						-
					</button>
					<input
						className='input-counter'
						type='text'
						name='counter'
						ref={this.counter}
						// value={state.valueCounter}
					/>

					<button
						className='plus'
						onClick={() =>
							dispatch({ type: 'PLUS_ORDER', counterBox: this.counter })
						}>
						+
					</button>
				</div>
			</Fragment>
		);
	}
}

//* redux
// const mapStateToProps = (state) => {
// 	return {
// 		order: state.totalOrder,
// 	};
// };

//* redux
//=> memanggil dispatch
// const mapDispatchToProops = (dispatch) => {
// 	return {
// 		handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
// 		handleMinus: () => dispatch({ type: ActionType.PLUS_ORDER }),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProops)(Counter);

export default GlobalConsumer(Counter);
