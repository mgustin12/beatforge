import React, { Component, PropTypes } from 'react';

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

	updateName() {
		let name = this.state.name;
		this.props.mutateName(1, name);
	}

	render() {
		let name = '';
		if(this.props.users) {
			name = this.props.users[0].name
		}

		return(
			<div>
				<input value={this.state.name} onChange={this.changeName.bind(this)} />
				<button onClick={this.updateName.bind(this)}>Submit</button>
				<h1>ProfilePage</h1>
				<h2>{ this.state.name }</h2>
			</div>

		);
	}
}

ProfilePage.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string
};

export default ProfilePage;