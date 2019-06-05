console.log("App.js is running");

const template = () => {
  <div>
    <h1>hello</h1>
    <ol>
      <li>lets see</li>
    </ol>
  </div>
};
var practiceRoot = document.getElementById("app");

ReactDOM.render(template, practiceRoot);
