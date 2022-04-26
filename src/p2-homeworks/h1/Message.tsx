import React from 'react'
import style from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt={'avatar'} className={style.avatar}/>

            <div className={style.angle}/>

            <div className={style.content}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message




