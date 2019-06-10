console.log("App");

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleSingleDelete = this.handleSingleDelete.bind(this);
    this.state = {
      options: []
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
    alert(option);
  }

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
      </div>
    );
  }
}
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }
const Action = props => {
  return (
    <div>
      <button onClick={props.handleChoice} disabled={props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handleChoice}
//           disabled={this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

class Options extends React.Component {
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
// passing singledelete in indecisonApp to options to option.which handle every single option.
const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleSingleDelete(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // const
    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
