"use strict";

console.log("App.js is running");
var book = {
  title: "The Song Of Ice ANd Fire",
  Subtitle: "Robert's Rebellion"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    book.title
  ),
  React.createElement(
    "p",
    null,
    book.Subtitle
  )
);

var practiceRoot = document.getElementById("app");

ReactDOM.render(template, practiceRoot);
