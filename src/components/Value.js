import { useState } from "react"


export default function Value() {
    const [value, setValue] = useState("oka")
    console.log(value);
    return (
        <>
            <input type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
        </>
    )
}
