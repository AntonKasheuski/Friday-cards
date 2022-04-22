import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {SuperButton} from "../common/SuperButton/SuperButton";

export const Header = () => {
    return (
        <div className={s.header}>
            <NavLink to='/login'>
                <SuperButton>Login</SuperButton>
            </NavLink>
            <NavLink to='/register'>
                <SuperButton>Register</SuperButton>
            </NavLink>
            <NavLink to='/profile'>
                <SuperButton>Profile</SuperButton>
            </NavLink>
            <NavLink to='/restore-password'>
                <SuperButton>Restore pass</SuperButton>
            </NavLink>
            <NavLink to='/new-password'>
                <SuperButton>New password</SuperButton>
            </NavLink>
            <NavLink to='/test'>
                <SuperButton>Test</SuperButton>
            </NavLink>
            <NavLink to='/error404'>
                <SuperButton>404</SuperButton>
            </NavLink>
        </div>
    );
};