import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<nav className="navbar navbar-toggleable-md navbar-light bg-inverse">
				<Link to="/home">
					<span className="navbar-brand text-white">BeatForge</span>
				</Link>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link to="/beatpad" className="nav-link text-white">Beatpad</Link>
					</li>
					<li className="nav-item">
						<Link to="/profile" className="nav-link text-white">Profile</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Header;