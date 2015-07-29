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

var Example = React.createClass({
  render: function(){
    return <Accordion elements={elements} />
  }
});

React.render(<Example />, document.getElementById('accordion-example'))
