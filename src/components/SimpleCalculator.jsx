var React = require('react');

var Heading = require('./Heading.jsx');
var InputBox = require('./InputBox.jsx');

var SimpleCalculator = React.createClass({
  onClick : function(e) {
    if (!this.refs.inputNumA.state.value || !this.refs.inputNumB.state.value) {
      alert("I need two numbers to do math you know!");
    } else { // we have a number, get doing stuff!
      var operation = e.target.value;
      var numA = parseInt(this.refs.inputNumA.state.value);
      var numB = parseInt(this.refs.inputNumB.state.value);
      switch (operation) {
        case "add":
          this.refs.inputResult.setState({value: numA + numB});
          break;
        case "subtract":
          this.refs.inputResult.setState({value: numA - numB});
          break;
        case "multiply":
          this.refs.inputResult.setState({value: numA * numB});
          break;
        case "divide":
          this.refs.inputResult.setState({value: numA / numB});
          break;
      }
    }
  },
  clear : function() {
    this.refs.inputNumA.setState({value: ""});
    this.refs.inputNumB.setState({value: ""});
    this.refs.inputResult.setState({value: ""});
  },
  render : function() {
    return (
      <div className="panel panel-default">
        <div className="row">
          <div className="col-sm-12">
            <div className="panel-heading text-center">
              <Heading headingText="Simple Calculator" />
            </div>
          </div>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-6">
              <InputBox inputType="number" placeholder="NUMBER e.g. 1337" ref="inputNumA" />
            </div>
            <div className="col-sm-6">
              <InputBox inputType="number" placeholder="NUMBER e.g. 2108" ref="inputNumB" />
            </div>
          </div><br />
          <div className="row">
            <div className="col-sm-3">
              <button className="btn btn-success" value="add" onClick={this.onClick}>+ Add</button>
            </div>
            <div className="col-sm-3">
              <button className="btn btn-success" value="subtract" onClick={this.onClick}>- Subtract</button>
            </div>
            <div className="col-sm-3">
              <button className="btn btn-success" value="multiply" onClick={this.onClick}>* Multiply</button>
            </div>
            <div className="col-sm-3">
              <button className="btn btn-success" value="divide" onClick={this.onClick}>/ Divide</button>
            </div>
          </div><br />
          <div className="row">
            <div className="col-sm-9">
              <InputBox inputType="number" placeholder="Result" ref="inputResult" readOnly="true"/>
            </div>
            <div className="col-sm-3">
              <button onClick={this.clear} className="btn btn-danger">Clear</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SimpleCalculator;
