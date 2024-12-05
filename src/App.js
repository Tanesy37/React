/* import { useState } from "react"; */
import React, { Greet } from "./components/Nav";
import Welcome from "./components/Obj1";

function App() {
  /* const [names, setNames] = useState([
    {
      name: "isaac",
      age: 99,
      country: "denmark",
      school: "///",
      id: 8989,
    },
    {
      name: "rodny",
      age: 101,
      country: "ghana",
      id: 58669,
    },
    {
      name: "peter",
      age: 77,
      country: "norawy",
      id: 3656,
    },
  ]);

  /*  const handelDelete = (id) => {
    const newNames = names.filter((name) => name.id !== id);
    setNames(newNames);
  }; */
  return (
    <div className="App">
      <Greet name="isaac" color="blue" age="88  ">
        cool
      </Greet>
      <br />
      <Greet name="peter" age="99 ">
        SECOUND EAZY
      </Greet>
      <br />
      <Greet name="emma" />

      <Welcome names="eazy" age="99">
        Welcome functon here :D{" "}
      </Welcome>
    </div>
  );
}

export default App;

//props.js file
