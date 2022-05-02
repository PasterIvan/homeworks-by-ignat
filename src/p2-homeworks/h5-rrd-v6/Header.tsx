import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Pages"
import style from './Header.module.css'

function Header() {
    return (
        <div>
            {/*// add NavLinks*/}
            <NavLink to={PATH.PRE_JUNIOR} className={style.preJun}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={style.jun}>Junior</NavLink>
            <NavLink to={PATH.Junior_Plus} className={style.junPlus}>Junior+</NavLink>
            <div className={style.menu}></div>
        </div>
    )
}

export default Header
