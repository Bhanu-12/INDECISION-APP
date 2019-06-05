"use strict";

var appRoot = document.getElementById("app");
var app = {
  title: "INDECISION APP",
  subtitle: "Put your life in hands of a computer",
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFunction();
  }
};
var renderFunction = function renderFunction() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      "app.subtitle"
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your OPtions" : "No options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          app.options = [];
          renderFunction();
        }
      },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          "Option: ",
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
renderFunction();
