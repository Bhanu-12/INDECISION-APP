"use strict";

var count = 1;
var appRoot = document.getElementById("app");
var onClickFunction = function onClickFunction() {
  count++;
  render();
};
var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: onClickFunction },
      count % 2 ? "Show Details" : "Hide Details"
    ),
    React.createElement(
      "p",
      null,
      " ",
      !(count % 2) ? "Show" : undefined
    )
  );
  ReactDOM.render(template, appRoot);
};
render();
