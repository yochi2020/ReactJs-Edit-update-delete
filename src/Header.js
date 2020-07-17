import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    const [collape,setcollap]=useState(false)
    return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto text-center">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"
            aria-label="Toggle navigation" aria-controls="navbarNav" aria-expanded="true">
                <span className="navbar-toggler-icon" onClick={()=>{setcollap(!collape)}}>

                </span>
            </button>
            <div className={
                collape?'collapse navbar-collapse show text-center pt-3':'collapse navbar-collapse'
            }>
                <ul className="navbar-nav active">
                    <li className="nav-item "><Link className="nav-link" to="/">All</Link></li>
                    <li className="nav-item "><Link className="nav-link" to="/add">Add</Link></li>
                </ul>
            </div>
        </nav>
    )
}
