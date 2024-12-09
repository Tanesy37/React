import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";




/* creates new blogs  */
export default function Create() {
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [age, setAge] = useState(99);
    const [country, setCountry] = useState("Denmark");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate(); // Replace useHistory with useNavigate
    console.log(name);

    /* sumbmits form and adds new created blog to json-server */
    function handelSubmit(e) {
        e.preventDefault()
        const blog = {
            name, about, age, country
        }

        console.log(JSON.stringify(blog));

        setLoading(true)
        setTimeout(() => {
            fetch("http://localhost:8000/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)

            }).then(() => {
                console.log("new block added")
                setLoading(false)
                /* navigate(-1);  */// Replace histroy.go(-1) with navigate(-1) go back one path
                navigate("/")
            })
            console.log(blog);
        }, 2000)

    }



    return (
        <>
            <div className='create'>
                <h2>add new blog </h2>

                <form onSubmit={handelSubmit} >

                    <label>Blog name </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" required />
                    <label>Blog about </label>
                    <textarea required value={about} onChange={(e) => setAbout(e.target.value)}>

                    </textarea >
                    <label>Blog age</label>
                    <select value={age} onChange={(e) => setAge(e.target.value)}>
                        <option value="77">77</option>
                        <option value="99">99</option>
                    </select>
                    <label> blog country</label>
                    <select value={country} onChange={(e) => setCountry(e.target.value)} required>
                        <option value="Denmark">Denmark</option>
                        <option value="Norway">Norwawy</option>
                        <option value="sweden">Sweden</option>
                        <option value="Ghana">Ghana</option>
                    </select>
                    {!loading && <button> add blog</button>}
                    {loading && <button disabled> adding blog...</button>}
                    <p>{name}</p>
                    <p>{about}</p>
                    <p>{age}</p>
                    <p>{country}</p>
                </form>
            </div>

        </>
    )
}


