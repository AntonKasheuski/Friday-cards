import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {Test} from "../../../features/test/Test";
import {Login} from "../../../features/auth/login/Login";
import {Register} from "../../../features/auth/register/Register";
import {Profile} from "../../../features/profile/Profile";
import {Error404} from "../common/Error404/Error404";
import {RestorePass} from "../../../features/pass/restorePass/RestorePass";
import {NewPass} from "../../../features/pass/newPass/NewPass";

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    RESTORE_PASS: '/restore-password',
    NEW_PASS: '/new-password',
    TEST: '/test',
    ERROR404: '/error404',
}

export const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTER} element={<Register/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.RESTORE_PASS} element={<RestorePass/>}/>
                <Route path={PATH.NEW_PASS} element={<NewPass/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={PATH.ERROR404} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate replace to={PATH.ERROR404}/>}/>
            </Routes>
        </div>
    )
};