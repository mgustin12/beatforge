import React, { Component } from 'react';

window.AudioContext = window.AudioContext||window.webkitAudioContext;
var context = new AudioContext();
var destination = context.destination;
var source;

class Beatpad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beat: {
				name: 'Acid Rain',
				url: 'files/acid_rain.mp3'
			},
			beatpad: [
				{
					name: 'Acid Rain',
					url: 'files/acid_rain.mp3'
				},
				{
					name: 'Cocoa Butter Kisses',
					url: 'files/cocoa_butter_kisses.mp3'
				}
			],
			playing: false
		};
	}

	loadBeat(url) {
    	let request = new XMLHttpRequest();
    	request.open("GET", url, true);
    	request.responseType = "arraybuffer";
    	request.onload = function() {
    	    context.decodeAudioData(request.response, function(buffer) {
    	        source.buffer = buffer;
				source.connect(destination);
    	    }, function(error) {
    	        console.error(error);
    	    });
    	};
    	request.send();
	}

	playBeat(beat) {
		source = context.createBufferSource();
		this.loadBeat(beat.url);
  		source.start(0);

		this.setState({
			beat,
			playing: true
		});
	}

	stopBeat() {
		source.stop();

		this.setState({
			playing: false
		});
	}

	padClick(beat) {
		this.state.playing ? this.stopBeat() : this.playBeat(beat);
	}

	render() {
		let beatpad = this.state.beatpad.map((beat, index) => {
			return (
				<div className="pad" key={index} onClick={this.padClick.bind(this, beat)}>{index}</div>
			);
		});

		return(
			<section className="beatpad">
				{ this.state.playing ? (<h1>Playing: {this.state.beat.name}</h1>) : null }
				<div className="beatpad-wrapper">
					{ beatpad }
				</div>
			</section>
		);
	}
}

export default Beatpad;