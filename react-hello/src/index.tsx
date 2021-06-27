import React from "react";
import ReactDOM from "react-dom";

// Functional components
function HelloWorld() {
  return (
    <div>
      <Hello />
    </div>
  );
}

function Hello() {
  //const name = "Jane";
  //return <span>Hello {name}</span>;
  let isHello = false;
  //return <span>{isHello ? "Hello" : "Goodbye"}</span>;
  return (
    <span>
      {isHello && "Hello"}
      {!isHello && "Goodbye"}
    </span>
  );
}

//function World() {
//return <span>World</span>;
//}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
