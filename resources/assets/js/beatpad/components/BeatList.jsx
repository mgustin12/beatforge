import React, { Component } from 'react';

class BeatList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let beats = this.props.beats.map(function(beat, index) {
			let pads = beat.pads.map(function(pad, index) {
				return (
					<span key={index} className="beat-pad">{pad + ' '}</span>
				);
			});

			return (
				<li key={index} className={'beat-item' + (this.props.queuedBeat && this.props.queuedBeat.name.includes(beat.name) ? ' active' : '')} onClick={this.props.setQueuedBeat.bind(this, beat)}>
					<span className="beat-name">{beat.name + ' | '}</span>
					{ pads }
				</li>
			);
		}, this);
		
		return(
			<div className="beat-list-section">
				<h2>Beat List</h2>
				<ul className="beat-list">
					{ beats }
				</ul>
			</div>
		);
	}
}

export default BeatList;