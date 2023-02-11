import React from "react";

export default function withCounter(
  Component,
  config = {
    initCount: 0,
  }
) {
  const { initCount } = config;
  return class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: initCount,
        amount: 0,
      };
      this.add = this.add.bind(this);
      this.minus = this.minus.bind(this);
      this.reset = this.reset.bind(this);
      this.addByAmount = this.addByAmount.bind(this);
      this.handleAmountChange = this.handleAmountChange.bind(this);
    }

    addByAmount() {
      this.setState({ count: this.state.count + this.state.amount });
    }

    handleAmountChange(e) {
      const value = +e.target.value;
      if (!Number.isInteger(value)) return;
      this.setState({ amount: value });
    }

    add() {
      this.setState({ count: this.state.count + 1 });
    }

    minus() {
      this.setState({ count: this.state.count - 1 });
    }

    reset() {
      this.setState({ count: 0 });
    }

    render() {
      const { count, amount } = this.state;
      return (
        <div>
          <Component
            count={count}
            reset={this.reset}
            add={this.add}
            minus={this.minus}
            amount={amount}
            handleAmountChange={this.handleAmountChange}
            addByAmount={this.addByAmount}
          />
        </div>
      );
    }
  };
}
