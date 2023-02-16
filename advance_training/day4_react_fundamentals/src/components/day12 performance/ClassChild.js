import React, { Component, PureComponent } from "react";

export default class ClassChild extends PureComponent {
  componentDidUpdate() {
    console.log("class child rerendered");
  }

  state = {
    count: 0,
  };

  // shouldComponentUpdate(nextProps,nextState) {
  //   for(const key of Object.keys(nextProps)){
  //       if(nextProps[key] !== this.props[key]){
  //           return true
  //       }
  //   }
  //   return false;
  // }

  render() {
    return (
      <div>
        <h3>Class Child</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          add
        </button>
        <div>Count From Prop: {this.props.count}</div>
        <div>Count From Own: {this.state.count}</div>
      </div>
    );
  }
}
