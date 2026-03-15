import React,{useState} from "react";

const App = () => {

  const [title, setTitle] = useState("")

  const submitHandler = (e) => {
   e.preventDefault();
    console.log("form sumbit");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="Enter your name"
          onChange={() => {
            console.log("input");
          } } />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
