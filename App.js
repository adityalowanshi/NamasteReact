const heading = React.createElement(
  "div",
  { id: "heading" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hello i am a child")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

root.render(heading); //this is an object  , render method is converting
// object into an html element
//  React.createElement (object) => HTMl ( this is what browser understand)
