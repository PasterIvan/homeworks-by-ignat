import React, {ChangeEvent, MouseEvent} from 'react'
import style from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (e: MouseEvent<HTMLButtonElement>) => void // need to fix any
    error?: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass =  style.inputClass   // need to fix with (?:)
    const buttonClass = `${style.buttonClass} ${error ? style.buttonError : ''}`

    return (
        <div className={style.greeting}>
            <div>
                <SuperInputText className={inputClass} value={name} onChange={setNameCallback} error={error} onBlur={setNameCallback} />
            </div>
            <SuperButton  className={buttonClass} onClick={addUser} disabled={!name} >add</SuperButton>
            <div className={style.count}>{totalUsers}</div>

        </div>
    )
}

export default Greeting
