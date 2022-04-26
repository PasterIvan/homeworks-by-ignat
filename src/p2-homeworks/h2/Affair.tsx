import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    id: number
    affair: AffairType // need to fix any
    deleteAffairCallback: (key: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.id)}// need to fix

    return (
        <div className={style.affair}>
            <div className={style.affairName}>
                {props.affair.name}
            </div>
            <div className={style.affairPriority}>
                {props.affair.priority}
            </div>
            <SuperButton className={style.deleteButton} onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
