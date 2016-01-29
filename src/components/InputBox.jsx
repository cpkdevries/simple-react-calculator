var React = require('react');

var InputBox = React.createClass({
  getInitialState : function() {
    if(this.props.inputType === "number") {
      return { value: "" }
    } else {
      return { value: "" }
    }
  },
  onChange : function(e) {
    this.setState({value: e.target.value});
  },
  render : function() {
    return (
      <input type={this.props.inputType} className="form-control" onChange={this.onChange} placeholder={this.props.placeholder} value={this.state.value} readOnly = {this.props.readOnly} />
    );
  }
});

module.exports = InputBox;
