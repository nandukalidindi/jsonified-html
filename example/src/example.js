import React from 'react';
import ReactDOM from 'react-dom';
import JsonifiedHtml from '../../src/JsonifiedHtml.js';

class App extends React.Component {

	textBoxHtmlJSON() {
		return {
		  "tag": "div",
		  "attributes": { "style": { "width": "200px", "height": "50px" } },
		  "children": [
		    {
		      "tag": "input",
		      "attributes": {
						"type": "text",
						"defaultValue": "Enter Something",
						"style": {
							"width": "100%", "height": "100%", "border": "none"
						}
					},
		    }
		  ]
		};
	}

	render() {	
		return (
			<div>
				<JsonifiedHtml elementJSON={this.textBoxHtmlJSON()}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
