import React from 'react';
import ReactDOM from 'react-dom';
import JsonifiedHtml from '../../src/JsonifiedHtml.js';

class App extends React.Component {
	render() {
		return (
			<div>
				<JsonifiedHtml />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
