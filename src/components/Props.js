import { useState } from "react";
import FnForProps from "./FnForProps"

export default function Props() {
    const [names,] = useState([
        {
            name: "Isaac",
            age: 99,
            country: "denmark",
            id: 8989,
        },
        {
            name: "Rodny",
            age: 101,
            country: "ghana",
            id: 58669,
        },
        {
            name: "Peter",
            age: 77,
            country: "norawy",
            id: 3656,
        },
    ]);

    console.log(names[0]);
    return (
        <>
            <FnForProps names={names}></FnForProps>
        </>
    )
}