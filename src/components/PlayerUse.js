import React, { Component } from 'react';
import PlayerBoard from './PlayerBoard.js';
import PlayerStatusField from './PlayerStatusField.js';



class PlayerUser extends Component {
	render() {
		return (
			<div>
				<PlayerBoard />
				<PlayerStatusField />
			</div>
			
		);
	}
}

export default PlayerUser;