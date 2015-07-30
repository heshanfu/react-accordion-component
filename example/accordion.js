var React = require('react');
var Accordion = require('../js/accordion');

var elements = [];
elements.push(
  { 
    title: 'Element 1', 
    onClick: function(){
      alert('Hello World!')
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu hendrerit sem. Vivamus euismod hendrerit purus'
  }
);

elements.push (
  {
    title: 'Element 2',
    onClick: function(){
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu hendrerit sem. Vivamus euismod hendrerit purus'
  }
);

var Example = React.createClass({displayName: "Example",
  render: function(){
    return React.createElement(Accordion, {elements: elements})
  }
});

React.render(React.createElement(Example, null), document.getElementById('accordion-example'))
