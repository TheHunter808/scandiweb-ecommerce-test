import React, { Component } from 'react';

export default class Overlay extends Component {
	render() {
		return <div className="modal">{this.props.children}</div>;
	}
}
