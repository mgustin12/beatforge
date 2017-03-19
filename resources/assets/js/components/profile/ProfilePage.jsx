import React, { Component } from 'react';

class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
	}

	componentWillReceiveProps(props) {
		let name = this.state.name;
		if(props.users) {
			name = props.users[0].name
		}
		this.setState({
			name
		});
	}

	changeName(e) {
		this.setState({
			name: e.currentTarget.value
		});
	}

	updateName(name) {
		this.props.updateName(1, name);
	}

	render() {
		let name = '';
		if(this.props.users) {
			name = this.props.users[0].name
		}

		return(
			<div>
				<input value={this.state.name} onChange={this.changeName.bind(this)} />
				<button onClick={this.updateName.bind(this, this.state.name)}>Submit</button>
				<h1>ProfilePage</h1>
				<h2>{ this.state.name }</h2>
			</div>

		);
	}
}

export default ProfilePage;