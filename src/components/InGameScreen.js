import React, { Component } from 'react';
import PlayerUse from './PlayerUse.js';
import ChatWindow from './ChatWindow.js';
import EnemyInfo from './EnemyInfo.js';



class GameBoard extends Component {
	render() {
		return (
			<div>
				<PlayerUse />
				<EnemyInfo />
				<ChatWindow />
			</div>
		);
	}
}

export default GameBoard;