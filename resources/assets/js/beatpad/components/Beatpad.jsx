import React, { Component } from 'react';

window.AudioContext = window.AudioContext||window.webkitAudioContext;
var context = new AudioContext();
var destination = context.destination;
var source;

class Beatpad extends Component {
	constructor(props) {
		super(props);
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
	}

	render() {
		let beatpad = this.props.beatpad.map((beat, index) => {
			if(Object.keys(beat).length == 0) {
				return (
					<div className={'pad disabled' + (this.props.editMode ? ' add' : '')} key={index} onClick={this.props.assignBeat.bind(this, index)}>
						{this.props.editMode ? <span>+</span> : null}
					</div>
				);
			} else {
				return (
					<div className="pad" key={index} onMouseDown={this.playBeat.bind(this, beat)}>{index + 1}</div>
				);
			}
		});

		return(
			<section className="beatpad-section">
				<div className="beatpad-wrapper">
					{ beatpad }
				</div>
			</section>
		);
	}
}

export default Beatpad;