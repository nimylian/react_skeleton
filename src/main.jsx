const React = require('react');
const ReactDOM = require('react-dom');
const ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, $('#ingredients')[0]);
ReactDOM.render(<ListManager title="ToDo" />, $('#todo')[0]);
ReactDOM.render(<ListManager title="Christmas" headingColor="#b31217" />, $('#christmas')[0]);
