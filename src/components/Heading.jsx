var React = require('react');

var Heading = React.createClass({
  render : function() {
    return (
      <h1>{this.props.headingText}</h1>
    )
  }
});

module.exports = Heading;
