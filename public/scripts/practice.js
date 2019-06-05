"use strict";

console.log("App.js is running");
var book = {
  title: "The Song Of Ice ANd Fire",
  Subtitle: "Robert's Rebellion",
  options: ["One", "Two"]
};
var getSubtitle = function getSubtitle(Subtitle) {
  if (Subtitle) {
    return React.createElement(
      "p",
      null,
      "Subtitle: ",
      Subtitle
    );
  }
};
var getOptions = function getOptions(options) {
  if (options.length > 0) {
    return React.createElement(
      "p",
      null,
      "Here are your options"
    );
  } else {
    return React.createElement(
      "p",
      null,
      "There are no options"
    );
  }
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    book.title
  ),
  getSubtitle(book.Subtitle),
  getOptions(book.options)
);
var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var practiceRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var template2 = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      " +1 "
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          count--;
          renderCounterApp();
        }
      },
      " ",
      "-1",
      " "
    )
  );

  ReactDOM.render(template2, practiceRoot);
};
renderCounterApp();
