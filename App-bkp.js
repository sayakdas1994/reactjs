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


// JSX => Babel transpiles it to React.createElement => ReactElement JS Object => HTMLElement(render)
//React Element
const heading = (
<h1 className='head'>
  I am an h1 tag
  </h1>
);

const Title = () => (
  <h1>This is title</h1>
);

//React component
const HeadingComponent = () =>
 (
    <div>
      {/* <Title /> */}
      {Title()}
      <h1 className='heading'>H1 Tag from component!</h1>
    </div>
  );


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); // rendering as element
root. render(<HeadingComponent />); // rendering as component
