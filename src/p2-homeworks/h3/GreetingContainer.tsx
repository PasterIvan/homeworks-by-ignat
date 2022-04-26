import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {v1} from "uuid";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value === '' || e.currentTarget.value === ' ') {
            setName('')
            setError('Enter name.')
        } else {
            setName(e.currentTarget.value)
            setError('')
        }
        // need to fix
    }
    const addUser = () => {
        if (name.length <= 1 ){
            setError('Name cannot be one letter!')
        }else{
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName('')
        }
        // need to fix
    }
  /*  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
            setName('')
        }
    }
*/
    let totalUsers = users.length

    // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}

        />

    )
}

export default GreetingContainer
