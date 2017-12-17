import React, { Component } from 'react';
import EnemyBoard from './EnemyBoard.js';
import EnemyStatusField from './EnemyStatusField.js';



class EnemyInfo extends Component {
	render() {
		return (
			<div>
				<EnemyBoard />
				<EnemyStatusField />
			</div>
		);
	}
}

export default EnemyInfo;