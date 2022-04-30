import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Pages";

function Header() {
    return (
        <div>
            {/*// add NavLinks*/}
            <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink to={PATH.Junior_Plus}>Junior+</NavLink>
        </div>
    )
}

export default Header
