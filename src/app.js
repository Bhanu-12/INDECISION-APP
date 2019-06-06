const appRoot = document.getElementById("app");
const app = {
  title: "INDECISION APP",
  subtitle: "Put your life in hands of a computer",
  options: []
};
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFunction();
  }
};

const onMakeDecison = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderFunction = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>app.subtitle</p>}
      <p>{app.options.length > 0 ? "Here are your OPtions" : "No options"}</p>
      <p>{app.options.length}</p>
      <button
        onClick={() => {
          app.options = [];
          renderFunction();
        }}
      >
        Remove All
      </button>
      <button disabled={app.options.length === 0} onClick={onMakeDecison}>
        What should I do.
      </button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>Option: {option}</li>;
        })}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
renderFunction();
