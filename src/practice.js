console.log("App.js is running");
const book = {
  title: "The Song Of Ice ANd Fire",
  Subtitle: "Robert's Rebellion",
  options: ["One", "Two"]
};
let getSubtitle = Subtitle => {
  if (Subtitle) {
    return <p>Subtitle: {Subtitle}</p>;
  }
};
let getOptions = options => {
  if (options.length > 0) {
    return <p>Here are your options</p>;
  } else {
    return <p>There are no options</p>;
  }
};
const template = (
  <div>
    <h1>{book.title}</h1>
    {getSubtitle(book.Subtitle)}
    {getOptions(book.options)}
  </div>
);
let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};

var practiceRoot = document.getElementById("app");

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}> +1 </button>
      <button
        onClick={() => {
          count--;
          renderCounterApp();
        }}
      >
        {" "}
        -1{" "}
      </button>
    </div>
  );

  ReactDOM.render(template2, practiceRoot);
};
renderCounterApp();
