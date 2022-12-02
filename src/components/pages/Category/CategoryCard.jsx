import React, { Component } from 'react';
import MiniCartIcon from '../../assets/MiniCartIcon';
import { connect } from 'react-redux';

class CategoryCard extends Component {
	//if currency is selected, showSelectedCurrency || default

	constructor(props) {
		super(props);

		this.state = {
			productID: this.props.productID,
		};

		this.style = {
			backgroundSize: 'contain',
			backgroundPosition: ' center',
			backgroundRepeat: 'no-repeat',
			height: '100%',
			width: ' 100%',
		};
	}

	productIdHandler() {
		this.props.getProdcutID(this.state.productID);
	}

	render() {
		return (
			<li
				className={'category-item'}
				key={this.props.index}
				onClick={this.productIdHandler.bind(this)}
			>
				<div className={'category-item__image-wrapper'}>
					<div
						className={'category-item__image-wrapper__image'}
						style={{
							backgroundImage: `url(${this.props.image})`,
							...this.style,
						}}
					></div>
					{!this.props.inStock ? (
						<span className={'category-item__image-wrapper-outOfStock'}>
							OUT OF STOCK
						</span>
					) : null}

					<MiniCartIcon
						color={'#ffffff'}
						className={`category-item__image-wrapper__cart`}
					/>
				</div>

				<div className="category-item__meta-container">
					<h2>{this.props.heading}</h2>
					<p>${this.props.price}</p>
				</div>
			</li>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		stateID: state.productID,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getProdcutID: () => dispatch({ type: 'getProductID' }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCard);
