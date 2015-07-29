var React = require('react');
var Accordion = require('../js/accordion');

var elements = [{
    title: 'Element 1',
    onClick: function(){
      alert('Hola')
    }
  }, {
    title: 'Element 2',
    onClick: function(){
    }
  }];

var Example = React.createClass({displayName: "Example",
  render: function(){
    return React.createElement(Accordion, {elements: elements})
  }
});

React.render(React.createElement(Example, null), document.getElementById('accordion-example'))
