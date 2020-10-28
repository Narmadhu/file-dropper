import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <div className="nav-bar">
            <h2 className="nav-title" >FD</h2>
        <nav>
                <div className="nav-links" >
                <span>Help</span> 
                <span>About us </span> 
                <span>Sign up</span>
                 <span>Log in</span>
                </div>
        </nav>
        </div>
    )
}

export default NavBar
