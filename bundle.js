require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"jsonified-html":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var JsonifiedHtml = (function (_React$Component) {
  _inherits(JsonifiedHtml, _React$Component);

  function JsonifiedHtml() {
    _classCallCheck(this, JsonifiedHtml);

    _get(Object.getPrototypeOf(JsonifiedHtml.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(JsonifiedHtml, [{
    key: 'buildReactElement',
    value: function buildReactElement(jsonHTML) {
      if (jsonHTML === null) return null;

      var argumentList = [jsonHTML['tag'], jsonHTML['attributes']];

      Object.keys(jsonHTML).forEach(function (prop) {
        if (['tag', 'attributes', 'event_listeners'].indexOf(prop) === -1) {
          jsonHTML['attributes'][prop] = jsonHTML[prop];
        }
      });

      if (jsonHTML['event_listeners']) {
        Object.keys(jsonHTML['event_listeners']).forEach((function (event_listener) {
          jsonHTML['attributes'][event_listener] = jsonHTML['event_listeners'][event_listener];
        }).bind(this));
      }

      (jsonHTML['children'] || []).forEach((function (child) {
        argumentList.push(this.buildReactElement(child));
      }).bind(this));

      return _react2['default'].createElement.apply(this, argumentList);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        this.buildReactElement(this.props.elementJSON)
      );
    }
  }]);

  return JsonifiedHtml;
})(_react2['default'].Component);

JsonifiedHtml.propTypes = {};

exports['default'] = JsonifiedHtml;
module.exports = exports['default'];

},{"react":undefined}]},{},[]);
