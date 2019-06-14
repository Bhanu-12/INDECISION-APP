import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleSingleDelete = this.handleSingleDelete.bind(this);
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      // check if null value is passed or not.
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  handleSingleDelete(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleChoice() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
    // alert(option);
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleAddOption(option) {
    if (!option) {
      return "Enter valid Item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This operation already exists";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
    // this.setState(prevState => {
    //   return {
    //     options: prevState.options.concat(option)
    //   };
    // });
  }

  render() {
    const app = {
      title: "Indecision App",
      subtitle: "Put your life in hands of a computer"
    };
    return (
      <div>
        <Header title={app.title} subtitle={app.subtitle} />
        <Action
          handleChoice={this.handleChoice}
          hasOptions={this.state.options.length <= 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleSingleDelete={this.handleSingleDelete}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
