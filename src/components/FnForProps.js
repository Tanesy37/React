import React from 'react'

export default function FnForProps(props) {
    const names = props.names

    return (
        <>
            <div>
                {names.map((e) => (<div key={e.id}>
                    <h1>{e.name}</h1>
                    <p>{e.age}</p>
                    <p>{e.country}</p>
                </div>

                ))}

            </div>
        </>
    )
}
