import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav>
            <ul className="contain borderXwidth">
                <NavLink to="/homepage" className="button " >home</NavLink>
                <NavLink to="/WhatDoIHave" >What do I Have ?</NavLink>
                <NavLink to="/MyWaste" className="button " >My waste</NavLink>
                <NavLink to="/login" className="button " >Login</NavLink>
            </ul>
        </nav>
    )
}
