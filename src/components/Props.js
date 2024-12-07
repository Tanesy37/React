import { useState, useEffect } from "react";
import FnForProps from "./FnForProps"

export default function Props() {
    const [names, setNames] = useState([
        {
            name: "Isaac",
            age: 99,
            country: "denmark",
            id: 8989,
        },
        {
            name: "Rodny",
            age: 99,
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

    function handelDelet(id) {
        const filted = names.filter((e) => e.id !== id)
        setNames(filted);
    }

    useEffect(() => {
        console.log("use effect ran");
        console.log(names);
    })
    return (
        <>
            <div>
                <FnForProps names={names} handelDelet={handelDelet}></FnForProps>
            </div>

            <div>
                <h1 style={{ color: "red" }}>99 and above age down here :</h1>
            </div>
        </>
    )
}