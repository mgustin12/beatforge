import React, { Component, PropTypes } from 'react';

class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			editMode: false
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

		this.setState({
			editMode: false
		});
	}

	editName() {
		this.setState({
			editMode: true
		});
	}

	render() {
		let name = null;
		if(this.state.editMode) {
			name = (
				<span className="edit-name">
					<input value={this.state.name} onChange={this.changeName.bind(this)} />
					<button onClick={this.updateName.bind(this)}>Submit</button>
				</span>
			);
		} else {
			name = (
				<span className="name">
					<span>{ this.state.name }</span>
					<button onClick={this.editName.bind(this)}>Edit</button>
				</span>
			);
		}

		return(
			<div className="profile-page">
				<div>
					<img src="img/salt-bae-big.png" height="300px" width="300px" />
				</div>
				{ name }
			</div>
		);
	}
}

ProfilePage.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string
};

export default ProfilePage;