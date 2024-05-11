import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar " style={{ backgroundColor: 'lime' }}>
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/demo">Create </Link>
                    <Link className="navbar-brand" to="/">Home </Link>
                </div>
            </nav>

        </div>
    )
}
