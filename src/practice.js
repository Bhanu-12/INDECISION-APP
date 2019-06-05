console.log("App.js is running");
var book = {
  title: "The Song Of Ice ANd Fire",
  Subtitle: "Robert's Rebellion"
};
var template = (
  <div>
    <h1>{book.title}</h1>
    <p>{book.Subtitle}</p>
  </div>
);

var practiceRoot = document.getElementById("app");

ReactDOM.render(template, practiceRoot);
