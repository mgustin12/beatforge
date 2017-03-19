import React, { Component } from 'react';

var context = new (window.AudioContext || window.webkitAudioContext)();

class Beatpad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note: '',
			playedNotes: []
		};
	}

	playSong() {
		context.decodeAudioData(audioData)
			.then(decodedData => {
			// use the decoded data here
		});
	}

	playNoise() {
		// Stereo
		var channels = 2;

		// Create an empty two second stereo buffer at the
		// sample rate of the AudioContext
		var frameCount = context.sampleRate * 2.0;
		var myArrayBuffer = context.createBuffer(channels, frameCount, context.sampleRate);

		// Fill the buffer with white noise;
		// just random values between -1.0 and 1.0
		for (var channel = 0; channel < channels; channel++) {
			// This gives us the actual array that contains the data
			var nowBuffering = myArrayBuffer.getChannelData(channel);
			for (var i = 0; i < frameCount; i++) {
			// Math.random() is in [0; 1.0]
			// audio needs to be in [-1.0; 1.0]
			nowBuffering[i] = Math.random() * 2 - 1;
			}
		}

		// Get an AudioBufferSourceNode.
		// This is the AudioNode to use when we want to play an AudioBuffer
		var source = context.createBufferSource();

		// set the buffer in the AudioBufferSourceNode
		source.buffer = myArrayBuffer;

		// connect the AudioBufferSourceNode to the
		// destination so we can hear the sound
		source.connect(context.destination);

		// start the source playing
		source.start();
	}

	selectBeat(note) {
		let prev = this.state.playedNotes;
		let playedNotes = [
			...prev,
			note
		];
		
		this.setState({
			note,
			playedNotes
		});
	}

	render() {
		let notes = ['A', 'B', 'C', 'D', 'E', 'F'];
		let beatpad = notes.map((note, index) => {
			return (
				<div className="pad" key={index} onClick={this.selectBeat.bind(this, note)}>
					{note}
				</div>
			);
		});

		let playedNotes = this.state.playedNotes.map((note, index) => {
			if(index == 0) {
				return (
					<p key={index}>{note}</p>
				);
			} else {
				return (
					<p key={index}>{', ' + note}</p>
				);
			}
		});

		return(
			<section className="beatpad">
				<button onClick={this.playSong.bind(this)}>Play Song</button>
				<button onClick={this.playNoise.bind(this)}>Play Noise</button>
				<h1>Playing: {this.state.note}</h1>
				<div className="beatpad-wrapper">
					{ beatpad }
					{ playedNotes }
				</div>
			</section>
		);
	}
}

export default Beatpad;