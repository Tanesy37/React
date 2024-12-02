import { useState } from "react";
import NavBar from "./Nav";
import Propsy from "./props";


function App() {
  const [names, setNames] = useState([
    {
      name: "isaac",
      age: 99,
      country: "denmark",
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

  const handelDelete = (id) => {
    const newNames = names.filter((name) => name.id !== id);
    setNames(newNames);
  };
  return (
    <div className="App">
      <NavBar />
      <Propsy names={names} handelDelete={handelDelete} />
      <quok />
    </div>
  );
}

export default App;

//props.js file
