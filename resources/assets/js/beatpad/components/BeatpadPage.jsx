import React, { Component } from 'react';

import Beatpad from './Beatpad.jsx';

class BeatpadPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="beatpad-page">
				<Beatpad />
			</div>
		);
	}
}

export default BeatpadPage;