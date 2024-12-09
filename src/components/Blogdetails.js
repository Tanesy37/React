import { useParams } from 'react-router-dom'
import useFecthData from './UseFecthData'

import { useNavigate } from 'react-router-dom'

export default function Blogdetails() {
    //the variable id for useparams() can be what ever
    const { id } = useParams()
    const { data, isLoading, error } = useFecthData("http://localhost:8000/blogs/" + id)
    const navigate = useNavigate()

    /* delete items/blogs */
    const handelDelete = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        }).then(() => {
            navigate("/")
        })
    }

    return (
        <>
            {isLoading && <div>data is looading</div>}
            {error && <div>there was an error {error}</div>}
            {
                data && <article>
                    <h2>{data.name}</h2>
                    <p>age :{data.age}</p>
                    <p style={{ color: "red" }}>about :{data.about}</p>
                    <button onClick={handelDelete}>Delet</button>
                </article>
            }
        </>
    )
}
