import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const NavTop = (props) => {
	return (
		<nav className='topbar'>
			<ul className='topbar-items '>
				<li className='topbar-item'>
					<Link className='topbar-link' to={props.blog}>
						Blog Post
					</Link>
				</li>
				<li className='topbar-item'>
					<Link className='topbar-link' to={props.product}>
						Products
					</Link>
				</li>
				<li className='topbar-item'>
					<Link className='topbar-link' to={props.lifeCycle}>
						LifeCycle
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavTop;
