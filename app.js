import React from 'react';
import ReactDOM from 'react-dom/client';
// const parent = React.createElement("div",
//   { id: "parent" },
//   [
//     React.createElement("div",
//       { id: "child", key: "child1" },
//       [
//         React.createElement("h1", { id: "heading1", key: "h1" }, "I'm an h1"),
//         React.createElement("h2", { id: "heading2", key: "h2" }, "I'm an h2 tag")
//       ]
//     ),

//     React.createElement("div",
//       { id: "child2", key: "child2" },
//       [
//         React.createElement("h1", { id: "heading1", key: "h3" }, "I'm an h1 tag"),
//         React.createElement("h2", { id: "heading2", key: "h4" }, "I'm an h2 tag")
//       ]
//     )
//   ]
// );


// const heading = React.createElement("h1", {id : "heading"}, "hello world from react!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(parent);

const jsxHeading = <h1 id="heading">I am an h1 tag</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);