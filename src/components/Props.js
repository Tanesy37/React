
import FnForProps from "./FnForProps";
import useFecthData from "./UseFecthData";

export default function Props() {
    const { data, isLoading, error } = useFecthData("http://localhost:8000/post")


    return (
        <>
            < div >
                {data && <FnForProps person={data} ></FnForProps>}
            </div >

            <div>
                {error && <div>!!!! Was and error: {error} !!!!</div>}
                {isLoading && <div>Loading...</div>}
            </div>

        </>
    );
}
