import React from 'react'
import s from './Error404.module.css'

export const Error404 = () => {
    return (
        <div className={s.error}>
            <div>404</div>
            <div className={s.line}/>
            <div>Not found</div>
        </div>
    )
}
