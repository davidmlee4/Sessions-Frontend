import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <h1>Sessions</h1>
            <Link to="/">
                <div>
                    Home
                </div>
            </Link>
            <Link to="/browse"> 
                <div>
                    Browse
                </div>
            </Link>
        </div>
    )
}

export default NavBar