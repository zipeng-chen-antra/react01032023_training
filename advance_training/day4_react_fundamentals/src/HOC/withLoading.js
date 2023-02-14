import React from "react";

export const withLoading = (InnerComponent, type = "loader") => {
  class Loader extends React.Component {
    render() {
      if (type === "loader") return <div>loading...</div>;
      if (type === "spinner") return <div>spinner...</div>;
    }
  }

  return class OuterComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
      this.stopLoading = this.stopLoading.bind(this);
      this.keepLoading = this.keepLoading.bind(this);
    }

    stopLoading() {
      this.setState({ isLoading: false });
    }

    keepLoading() {
      this.setState({ isLoading: true });
    }

    render() {
      return (
        <InnerComponent
          {...this.props}
          isLoading={this.state.isLoading}
          stopLoading={this.stopLoading}
          keepLoading={this.keepLoading}
          Loader={Loader}
        />
      );
    }
  };
};

