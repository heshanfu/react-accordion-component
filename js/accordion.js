var React =  require('React');

var AccordionElement =  React.createClass({displayName: "AccordionElement",
  
  propTypes: {
    title: React.PropTypes.string,
    clickCallback: React.PropTypes.func
  },

  getInitialState: function() {
    return {collapsed: true}
  },

  _expand: function() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  },

  render: function() {

    return (
      React.createElement("div", {className: "accordion-element"}, 
        React.createElement("div", {className: "left-part", onClick: this._expand}, this.state.collapsed ? '●' : '◦'), 
        React.createElement("div", {className: "right-part", onClick: this.props.clickCallback}, 
          React.createElement("h4", null, this.props.title)
        )
      )
    );
  }

});

/* Accordion element list */
var Accordion = React.createClass({displayName: "Accordion",

  propTypes: {
    elements: React.PropTypes.arrayOf(React.PropTypes.object)  
  },

  render: function() {
    var accordionElements = this.props.elements.map(function(e, i) {
       return React.createElement(AccordionElement, {key: i, clickCallback: e.onClick, title: e.title})
    });
    
    return (
      React.createElement("div", {className: "accordion-wrapper"}, 
        accordionElements
      )
    );
  }

});

module.exports = Accordion;
