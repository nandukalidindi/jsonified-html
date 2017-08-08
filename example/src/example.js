import React from 'react';
import ReactDOM from 'react-dom';
import JsonifiedHtml from '../../src/JsonifiedHtml.js';

class App extends React.Component {

	constructor(props) {
    super(props);
    this.state = {};

		this.textBoxHtmlJSON = {
		  tag: 'div',
		  attributes: { style: { width: '200px', height: '50px' } },
		  children: [
		    {
		      tag: 'input',
		      attributes: {
						type: 'text', defaultValue: 'Enter Something',
						style: { width: '100%', height: '100%' }
					},
					event_listeners: {
						onClick: (event) => {

						},
						onBlur: (event) => {

						}
					}
		    }
		  ]
		};

		this.textAreaHtmlJSON = {
		  tag: 'div',
		  attributes: { style: { width: '200px', height: '50px' } },
		  children: [
		    {
		      tag: 'textarea',
		      attributes: {
						defaultValue: 'Enter Something',
						style: { width: '100%', height: '100%' }
					},
					event_listeners: {
						onClick: (event) => {

						},
						onBlur: (event) => {

						}
					}
		    }
		  ]
		};

		this.buttonHtmlJSON = {
			tag: 'div',
			attributes: { style: { width: '200px', height: '50px' } },
			children: [
				{
					tag: 'input',
					attributes: {
						type: 'Button', defaultValue: 'Click',
						style: { width: '100%', height: '100%' }
					},
					event_listeners: {
						onClick: (event) => {
							alert("I AM BEING CLICKED!!")
						}
					}
				}
			]
		};

		this.imageHtmlJSON = {
			tag: 'div',
			attributes: { style: { width: '200px', height: '200px' } },
			children: [
				{
					tag: 'img',
					attributes: {
						src: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png', alt: 'jsonified-image',
						style: { width: '100%', height: '100%' }
					},
					event_listeners: {
						onClick: (event) => {
							alert("I AM BEING CLICKED!!")
						}
					}
				}
			]
		};

		this.videoHtmlJSON = {
			tag: 'div',
			attributes: { style: { width: '200px', height: '200px' } },
			children: [
				{
					tag: 'video',
					attributes: {
						src: 'https://www.w3schools.com/tags/movie.mp4', type: 'video/mp4',
						controls: true, style: { width: '100%', height: '100%' }
					},
					event_listeners: {
						onClick: (event) => {
							alert("I AM BEING CLICKED!!")
						}
					}
				}
			]
		};

		this.audioHtmlJSON = {
			tag: 'div',
			attributes: { style: { width: '200px', height: '50px' } },
			children: [
				{
					tag: 'audio',
					attributes: {
						src: 'https://www.w3schools.com/tags/horse.mp3', type: 'audio/mpeg',
						controls: true, style: { width: '100%', height: '100%' }
					},
					event_listeners: {
						onClick: (event) => {
							alert("I AM BEING CLICKED!!")
						}
					}
				}
			]
		};
  }

	render() {
		return (
			<div>
				<div>
					<p> TEXT BOX </p>
					<JsonifiedHtml
						elementJSON={this.textBoxHtmlJSON}
					/>
				</div>
				<div>
					<p> TEXT AREA </p>
					<JsonifiedHtml
						elementJSON={this.textAreaHtmlJSON}
					/>
				</div>
				<div>
					<p> BUTTON </p>
					<JsonifiedHtml
						elementJSON={this.buttonHtmlJSON}
					/>
				</div>
				<div>
					<p> IMAGE </p>
					<JsonifiedHtml
						elementJSON={this.imageHtmlJSON}
					/>
				</div>
				<div>
					<p> VIDEO </p>
					<JsonifiedHtml
						elementJSON={this.videoHtmlJSON}
					/>
				</div>
				<div>
					<p> AUDIO </p>
					<JsonifiedHtml
						elementJSON={this.audioHtmlJSON}
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
