import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            {/*// add NavLinks*/}
            <NavLink to={'/pre-junior'}>PreJunior</NavLink>
        </div>
    )
}

export default Header
