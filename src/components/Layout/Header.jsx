import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/a-logo.png';
import Currency from '../Header/Currency';
import HeaderCart from '../Header/HeaderCart';

class Header extends Component {
	render() {
		return (
			<header className={'header'}>
				<nav className={'header-navigation'}>
					<ul className={`header-navigation__items`}>
						<li className={`header-navigation__items--item`}>
							<Link to={'/'}>All</Link>
						</li>
						<li className={`header-navigation__items--item`}>
							<Link to={'/clothes'}>Clothes</Link>
						</li>
						<li className={`header-navigation__items--item`}>
							<Link to={'/tech'}>Tech</Link>
						</li>
					</ul>
				</nav>

				<div className={`header-logo`}>
					<img src={logo} alt="Brand logo" className={'header-logo__logo'} />
				</div>

				<div className={'header-actions'}>
					<Currency />

					<HeaderCart />
				</div>
			</header>
		);
	}
}

export default Header;
