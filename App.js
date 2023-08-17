let heading = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      [
        React.createElement("h1", {}, "Hi analogy 1"),
        React.createElement("h1", {}, "Hi anaogy 2"),
      ]
    ),
  ],
  [
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [
        React.createElement("h1", {}, "Hi analogy chid21"),
        React.createElement("h1", {}, "Hi anaogy child22"),
      ]
    ),
  ]
);
//console.log(heading);
let rooting = ReactDOM.createRoot(document.getElementById("root"));
rooting.render(heading);
