"use strict";

console.log("App.js is running");

var template = function template() {
  React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "hello"
    ),
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        null,
        "lets see"
      )
    )
  );
};
var practiceRoot = document.getElementById("app");

ReactDOM.render(template, practiceRoot);
