
import { useState, useEffect } from "react";

export default function useFecthData(url) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const timer = setTimeout(() => {
            fetch(url, { signal })
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
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        setError(err.message)
                        setLoading(false)

                    }

                })

        }, 1000)
        return () => {
            clearTimeout(timer);
            abortController.abort();
        };
    }, [url]);




    return { data, isLoading, error }


}
