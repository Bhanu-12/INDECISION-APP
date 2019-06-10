import React from "react";
import Option from "./SingleOption";

export default class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(option => (
          <Option
            key={option}
            optionText={option}
            handleSingleDelete={this.props.handleSingleDelete}
          />
        ))}
      </div>
    );
  }
}
