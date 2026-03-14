import React from "react";

const App = () => {
  return (
    <div
      onMouseMove={(elem) => {
        console.log(elem.clientX);
      }}
      className="box"
    ></div>
  );
};

export default App;
