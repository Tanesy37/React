
import FnForProps from "./PropsForHome";
import useFecthData from "./UseFecthData";

export default function Props() {
    //renaming data to data1
    const { data: data1, isLoading, error } = useFecthData("http://localhost:8000/blogs")


    return (
        <>
            <div>
                {data1 && <FnForProps person={data1} ></FnForProps>}
            </div >
            <div>
                {error && <div>!!!! This is the error: {error} !!!!</div>}
                {isLoading && <div>Loading...</div>}
            </div>

        </>
    );
}
