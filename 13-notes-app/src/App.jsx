import React, { useState } from "react";
import { X } from "lucide-react";


const App = () => {
  const [title, setTitle] = useState("");

  const [detaile, setDetaile] = useState("");

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detaile })
    setTask(copyTask)
    

    setTitle("")
    setDetaile("")
  }

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 gap-4 flex-col items-start p-10 "
      >
        <h1 className="text-3xl font-bold ">Add Notes</h1>

        {/* first input */}
        <input
          className="p-5 w-full py-2 border-2 outline-none rounded"
          type="text"
          placeholder="enter notes heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* second input */}
        <textarea
          className="p-5 w-full h-32 border-2 outline-none rounded"
          type="text"
          placeholder="write details"
          value={detaile}
          onChange={(e) => {
            setDetaile(e.target.value)
            
          }}
        />

        <button className="bg-white active:bg-red-500 w-full outline-none text-black px-5 py-2 rounded">
          ADD Note
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10 bg-blue-950">
        <h1 className="text-3xl font-bold">Your Note</h1>


        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto">
          {task.map(function (elem,idx) {
            return (

              <div
                key={idx}
                className="h-52 w-40 rounded-xl bg-white text-black p-4"
              >

                <h2 className="absolute top-5 right-5 bg-red-500 p-1 rounded-full"><X /></h2>

                <h3 className="leading-tight text-xl font-bold">
                  {elem.title}
                </h3>

                <p className="mt-2 leading-tight font-medium text-gray-600">
                  {elem.detaile}
                </p>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
