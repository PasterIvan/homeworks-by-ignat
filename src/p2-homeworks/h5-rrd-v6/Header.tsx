import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Pages"
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.nav}>
            {/*// add NavLinks*/}
            <input type="checkbox" id="hmt" className={style.hiddenMT}/>
            <div className={style.content}>
                <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? style.active : style.preJun}>PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? style.active : style.jun}>Junior</NavLink>
                <NavLink to={PATH.Junior_Plus} className={({isActive}) => isActive ? style.active : style.junPlus}>Junior+</NavLink>
            </div>
            <label className={style.btnM} htmlFor="hmt"/>
        </div>
    )
}

export default Header
