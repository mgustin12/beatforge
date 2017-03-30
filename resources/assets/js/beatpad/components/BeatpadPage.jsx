import React, { Component } from 'react';

import Beatpad from '../containers/Beatpad.js';
import BeatList from '../containers/BeatList.js';

class BeatpadPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			queuedBeat: null,
			editMode: false,
			beatpad: [
				{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
				{
					name: 'Kick C',
					url: 'files/trad_kick_01_C.wav'
				},
				{
					name: 'Kick D',
					url: 'files/trad_kick_09_D.wav'
				},
				{
					name: 'Kick E',
					url: 'files/trad_kick_17_E.wav'
				},
				{
					name: 'Kick F',
					url: 'files/trad_kick_21_F.wav'
				},
				{
					name: 'Kick G',
					url: 'files/trad_kick_29_G.wav'
				},
				{
					name: 'Kick A',
					url: 'files/trad_kick_37_A.wav'
				},
				{
					name: 'Kick B',
					url: 'files/trad_kick_45_B.wav'
				}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
			],
			beats: [
				{
					name: 'Kick C',
					url: 'files/trad_kick_01_C.wav',
					pads: [24]
				},
				{
					name: 'Kick D',
					url: 'files/trad_kick_09_D.wav',
					pads: [25]
				},
				{
					name: 'Kick E',
					url: 'files/trad_kick_17_E.wav',
					pads: [26]
				},
				{
					name: 'Kick F',
					url: 'files/trad_kick_21_F.wav',
					pads: [27]
				},
				{
					name: 'Kick G',
					url: 'files/trad_kick_29_G.wav',
					pads: [28]
				},
				{
					name: 'Kick A',
					url: 'files/trad_kick_37_A.wav',
					pads: [29]
				},
				{
					name: 'Kick B',
					url: 'files/trad_kick_45_B.wav',
					pads: [30]
				}
			]
		};
	}

	setQueuedBeat(beat) {
		this.setState({
			queuedBeat: beat,
			editMode: true
		});
	}

	assignBeat(pad) {
		if(this.state.editMode) {
			let beatpad = this.state.beatpad.map(function(beat, index) {
				if(index == pad) {
					return this.state.queuedBeat;
				} else {
					return beat;
				}
			}, this);

			let beats = this.state.beats.map(function(beat, index) {
				if(beat.name == this.state.queuedBeat.name) {
					return {
						...beat,
						pads: [...beat.pads, (pad + 1)]
					};
				} else {
					return beat;
				}
			}, this);

			this.setState({
				beatpad,
				beats,
				queuedBeat: null,
				editMode: false
			});
		}
	}

	render() {
		return(
			<div className="beatpad-page">
				<Beatpad
					queuedBeat={this.state.queuedBeat}
					assignBeat={this.assignBeat.bind(this)}
					editMode={this.state.editMode}
					beatpad={this.state.beatpad} />
				<BeatList
					queuedBeat={this.state.queuedBeat}
					setQueuedBeat={this.setQueuedBeat.bind(this)}
					beats={this.state.beats} />
			</div>
		);
	}
}

export default BeatpadPage;