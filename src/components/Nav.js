import React from "react";

export const Greet = (props) => {
  return (
    <>
      <h1>{props.name.toUpperCase()}</h1>

      <p> color: {props.color}</p>

      <p>age :{props.age}</p>

      <p> text :{props.children}</p>
    </>
  );
};
