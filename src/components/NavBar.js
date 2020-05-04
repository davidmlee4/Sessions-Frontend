import React from 'react'
import { Link } from "react-router-dom"
import { NavButton, NavStyle, AppName } from "../styled";


const NavBar = () => {
    return (
        <NavStyle>
            <AppName>Sessions</AppName>
            <Link to="/">
                <NavButton>
                    <div>
                        Home
                    </div>
                </NavButton>
            </Link>
            <Link to="/browse"> 
                <NavButton>
                    <div>
                        Browse
                    </div>
                </NavButton>
            </Link>
        </NavStyle>
    )
}

export default NavBar