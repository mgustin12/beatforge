import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<nav className="navbar">
				<Link to="/home" className="navbar-brand">
					<img src="/img/favicon-96.png" height="80px" width="80px" />
				</Link>
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link to="/beatpad" className="nav-link">Beatpad</Link>
					</li>
					<li className="nav-item">
						<Link to="/profile" className="nav-link">Profile</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;