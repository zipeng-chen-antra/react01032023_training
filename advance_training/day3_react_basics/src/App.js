import React from "./react/react";

class PersonC extends React.Component {
  render() {
    return (
      <div>
        <h1>Person Class Component</h1>
        <div>Hello, {this.props.name}</div>
        <div>Your age is: {this.props.age}</div>
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: "value",
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }

  handleAdd() {
    this.setState({ count: this.state.count + 1 });
    // this.setState({value:this.state.value+"aaa"});
  }
  handleMinus() {
    this.setState({ count: this.state.count - 1 });
    // this.setState({value:this.state.value+"aaa"});
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div>Count: {this.state.count}</div>
        <div>Value: {this.state.value}</div>
        <button onClick={this.handleAdd}>ADD</button>
        <button onClick={this.handleMinus}>Minus</button>
      </div>
    );
  }
}

function PersonF(props) {
  return (
    <div>
      <h1>Person Function Component</h1>
      <div>Hello, {props.name}</div>
      <div>Your age is: {props.age}</div>
    </div>
  );
}

export default function App() {
  return (

    <div>
      <h1>App</h1>
      {/* <PersonC name="Mike" age={10} /> */}
      <Counter name="counter 1" />
    </div>
  );
}
