import React from "react";
export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value
      ? e.target.elements.option.value.trim()
      : null;
    const error = this.props.handleAddOption(option);
    // const
    this.setState(() => {
      return { error };
    });
    if (!error) e.target.elements.option.value = "";
  }
  render() {
    return (
      <div>
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input
            className="add-option__input"
            type="text"
            name="option"
            autoComplete="off"
            placeholder="add your options"
          />
          <button className="button">Add option</button>
          {this.state.error && (
            <p className="add-option-error">{this.state.error}</p>
          )}
        </form>
      </div>
    );
  }
}
