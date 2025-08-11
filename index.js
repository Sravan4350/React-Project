import React from "react";
import ReactDOM from "react-dom/client"; // It renders React components into the actual web page’s DOM in the browser.

const element = React.createElement('div', {id : 'parent'}, [
  React.createElement('h1', { key: '1', id : 'child1'}, "Hello Sravan")
]);

console.log(element)

const root = ReactDOM.createRoot(document.getElementById("root")); // It creates a root for the React application to render into.
root.render(element)
console.log("React element rendered successfully", root);
