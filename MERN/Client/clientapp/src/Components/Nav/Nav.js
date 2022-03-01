import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div className="container-fluid p-0">
                   <div className="row">
                       <div className="col">
                           <nav className="navbar bg-dark navbar-dark navbar-collaspse-sm">
                        <a href="/aa" className="navbar-brand">MERN STACK</a>
                           <ul className="nav">
                               <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                               <li className="nav-item"><Link className="nav-link text-white" to="/user">User</Link></li>
                               <li className="nav-item"><Link className="nav-link text-white" to="/emp">Employee</Link></li>
                               <li className="nav-item"><Link className="nav-link text-white" to="/help">Help</Link></li>
                           </ul>
                           </nav>
                       </div>
                   </div>
        </div>
    )
}
export default Nav