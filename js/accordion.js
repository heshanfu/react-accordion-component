var React =  require('React');

var AccordionElement =  React.createClass({displayName: "AccordionElement",
  
  propTypes: {
    title: React.propTypes.string,
    clickCallback: React.propTypes.func
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
    var inline = {
      display: 'inline'
    };

    return (
      React.createElement("div", {className: "accordion-element"}, 
        React.createElement("div", {className: "left-part", style: inline, onClick: this._expand}, this.state.collapsed ? '●' : '◦'), 
        React.createElement("div", {className: "right-part", style: inline, onClick: this.props.clickCallback}, 
          React.createElement("h4", null, this.props.title)
        )
      )
    );
  }

});

/* Accordion element list */
var Accordion = React.createClass({displayName: "Accordion",

  propTypes: {
    elements: React.propTypes.arrayOf(React.propTypes.object)  
  },

  render: function() {
    var accordionElements = this.props.elements.map(function(i, e) {
       return React.createElement(AccordionElement, {clickCallback: e.onClick, title: e.title})
    });
    
    return (
      React.createElement("div", {className: "accordion-wrapper"}, 
        accordionElements
      )
    );
  }

});
