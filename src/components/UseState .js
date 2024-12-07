import { useState } from "react";


export default function UseState() {
  const [greet, setGreet] = useState("Welcome")
  const [age, setAge] = useState(99)
  function handleGreet() {
    greet === "Welcome" ? setGreet("GoodBye") : setGreet("Welcome")
    age === 99 ? setAge(77) : setAge(99)

  }
  return (
    <>
      <div>
        <h1>hej sir {greet} you age is {age}</h1>
        <button onClick={handleGreet}>click me</button>
      </div>
    </>
  )
}