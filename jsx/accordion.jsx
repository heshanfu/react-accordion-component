var React =  require('React');

var AccordionElement =  React.createClass({
  
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
      <div className='accordion-element'>
        <div className='left-part' onClick={this._expand}>{this.state.collapsed ? '●' : '◦'}</div>
        <div className='right-part' onClick={this.props.clickCallback}>
          <h4>{this.props.title}</h4>
        </div>
      </div>
    );
  }

});

/* Accordion element list */
var Accordion = React.createClass({

  propTypes: {
    elements: React.PropTypes.arrayOf(React.PropTypes.object)  
  },

  render: function() {
    var accordionElements = this.props.elements.map(function(e, i) {
       return <AccordionElement key={i} clickCallback={e.onClick} title={e.title} />
    });
    
    return (
      <div className='accordion-wrapper'>
        {accordionElements}
      </div>
    );
  }

});

module.exports = Accordion;
