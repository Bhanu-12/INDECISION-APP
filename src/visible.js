let count = 1;
const appRoot = document.getElementById("app");
const onClickFunction = () => {
  count++;
  render();
};
const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onClickFunction}>
        {count % 2 ? "Show Details" : "Hide Details"}
      </button>
      <p> {!(count % 2) ? "Show" : undefined}</p>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
