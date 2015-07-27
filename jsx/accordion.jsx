var React =  require('React');

var AccordionElement =  React.createClass({
  
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
      <div className='accordion-element'>
        <div className='left-part' style={inline} onClick={this._expand}>{this.state.collapsed ? '●' : '◦'}</div>
        <div className='right-part' style={inline} onClick={this.props.clickCallback}>
          <h4>{this.props.title}</h4>
        </div>
      </div>
    );
  }

});

/* Accordion element list */
var Accordion = React.createClass({

  propTypes: {
    elements: React.propTypes.arrayOf(React.propTypes.object)  
  },

  render: function() {
    var accordionElements = this.props.elements.map(function(i, e){
      return (
        <AccordionElement clickCallback={e.onClick} title={e.title}>
      );
    });
    
    return (
      <div className='accordion-wrapper'>
        {accordionElements}
      </div>
    );
  }

});
