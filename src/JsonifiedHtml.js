import React from 'react';

class JsonifiedHtml extends React.Component {

	buildReactElement(jsonHTML) {
    if(jsonHTML === null) return null;

    var argumentList = [jsonHTML['tag'], jsonHTML['attributes']];

    Object.keys(jsonHTML).forEach(function(prop) {
      if(['tag', 'attributes', 'event_listeners'].indexOf(prop) === -1)
        jsonHTML['attributes'][prop] = jsonHTML[prop];
    });

    if(jsonHTML['event_listeners']) {
      Object.keys(jsonHTML['event_listeners']).forEach(function(event_listener) {
        jsonHTML['attributes'][event_listener] = this[jsonHTML['event_listeners'][event_listener]].bind(this)
      }.bind(this));
    }

    (jsonHTML['children'] || []).forEach(function(child) {
      argumentList.push(this.buildReactElement(child));
    }.bind(this));

    return React.createElement.apply(this, argumentList);
  }

	render() {
		return (
			<div>
				{this.buildReactElement(this.props.elementJSON)}
			</div>
		);
	}
}

JsonifiedHtml.propTypes = {

}

export default JsonifiedHtml;
