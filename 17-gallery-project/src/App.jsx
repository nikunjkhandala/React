import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userdata, setUserdata] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=100`
    );
    setUserdata(response.data);
  };

  useEffect(function () {
    getData();
  }, [index ]);

  let printUserData = "Loading... ";

  if (userdata.length > 0) {
    printUserData = userdata.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-60 w-69 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className=" bg-black overflow-auto h-screen p-4 text-white">
      
      <div className="flex flex-wrap gap-3">{printUserData}</div>

      <div className="flex justify-center items-center p-4 gap-6 ">
        <button onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUserdata([])
          }
        }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold">
          Prev
        </button>
        <button onClick={() => {
          setUserdata([])
          setIndex(index+1)
        }}
          className = "bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold" >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
