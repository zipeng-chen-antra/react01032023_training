import React, { Component } from "react";

export default class PersonC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("component first time mounts");
  }

  componentWillUnmount() {
    console.log("bye");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps",prevProps);
    // console.log("prevState",prevState);
    if (prevState.age !== this.state.age) {
      console.log(this.props.name, "aged well");
    }
    console.log("component rerendered");
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (
      prevProps.name === this.props.name &&
      prevState.age === this.state.age &&
      prevProps.money === this.props.money
    )
      return false;
    return true;
  }

  handleClick() {
    this.setState(
      (prev) => {
        console.log(prev);
        return { age: prev.age + 1 };
      },
      () => {
        // console.log("aged well")
      }
    );
    // this.setState((prev)=>{
    //   return {
    //     age: prev.age + 1
    //   }
    // });
    // this.setState({age:1+1});
    // this.setState({age:1+1});
  }

  render() {
    return (
      <div>
        <h1>Person Class</h1>
        <div>{this.props.name}</div>
        <div>Age: {this.state.age}</div>
        <div>Money: {this.props.money}</div>
        <button onClick={this.props.cb}>give sibling money</button>
        <button onClick={this.handleClick}>Grow 1 year</button>
      </div>
    );
  }
}
