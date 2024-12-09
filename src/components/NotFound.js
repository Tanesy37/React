import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <p style={{
                color: "red",
                fontWeight: "bold"
            }}>!PAGE NOT FOUND!</p>
            <p>Sorry the page you are looking was not found! </p>
            <Link to="/"> click here to go back go back to home</Link>
        </>
    )
}
