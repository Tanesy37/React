import React from 'react'
import { Link } from 'react-router-dom'

export default function FnForProps({ person }) {


    return (
        <>
            <div>
                {person.map((e) => (
                    <div key={e.id}>
                        <Link to={`/blogs/${e.id}`}>
                            <div className='props'>
                                <h1>{e.name}</h1>
                                <p>{e.age}</p>
                                <p>{e.country}</p>
                            </div>
                        </Link>

                    </div>

                ))}

            </div>
        </>
    )
}
