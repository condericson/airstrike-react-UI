import React, { Component } from 'react';



class Login extends Component {

	loadNewGame = () => {

	}

	render() {
		return (
			<div>
				<form id="entryForm" onSubmit={loadNewGame}>
					<h1 class="welcome">Welcome to Airstrike!</h1>
					<input id="userNicknameEntry" autocomplete="off" placeholder="Enter a nickname" required/>
				</form>
			</div>
		);
	}
}

export default Login;