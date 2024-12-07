
import { useState, useEffect } from "react";

export default function useFecthData(url) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("end point does not exist")
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setLoading(false)
                setError(null)
                console.log("data :", data);
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
                console.log(err.message);

            })
    }, [url]);




    return { data, isLoading, error }


}
