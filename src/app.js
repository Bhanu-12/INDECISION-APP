class IndecisionApp extends React.Component {
  render() {
    const app = {
      title: "Indecision App",
      subtitle: "Put your life in hands of a computer",
      options: ["Item One", "Item Two"]
    };
    return (
      <div>
        <Header title={app.title} subtitle={app.subtitle} />
        <Action />
        <Option options={app.options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handleChoice() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleChoice}>What should I do?</button>
      </div>
    );
  }
}

class Option extends React.Component {
  handleRemoveAll() {
    alert("removed");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <ol>
          {this.props.options.map(option => {
            return <li key={option}>Option:{option}</li>;
          })}
        </ol>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
    alert(option);
      // app.options.push(option);
      // e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
