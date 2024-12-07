import React from 'react'

export default function FnForProps({ names, handelDelet }) {


    return (
        <>
            <div>
                {names.map((e) => (<div key={e.id}>
                    <h1>{e.name}</h1>
                    <p>{e.age}</p>
                    <p>{e.country}</p>
                    <button onClick={() => handelDelet(e.id)}>delet</button>
                </div>

                ))}

            </div>
        </>
    )
}
