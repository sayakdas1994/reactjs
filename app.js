const parent = React.createElement("div", 
    {id : "parent"}, 
    [   React.createElement("div", 
        {id : "child"}, 
        [React.createElement("h1", {id: "heading1"}, "I'm an h1 tag"),
        React.createElement("h2", {id: "heading2"}, "I'm an h2 tag")
        ]
    ),
   React.createElement("div", 
        {id : "child2"}, 
        [React.createElement("h1", {id: "heading1"}, "I'm an h1 tag"),
        React.createElement("h2", {id: "heading2"}, "I'm an h2 tag")
        ]
    )]

    );


const heading = React.createElement("h1", {id : "heading"}, "hello world from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);