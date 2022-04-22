import React from 'react';
import {SuperInputText} from "../../main/ui/common/SuperInputText/SuperInputText";
import s from "./Test.module.css"
import {SuperButton} from "../../main/ui/common/SuperButton/SuperButton";
import {SuperCheckbox} from "../../main/ui/common/SuperCheckbox/SuperCheckbox";

export const Test = () => {
    return (
        <div className={s.test}>
            <SuperInputText/>
            <hr/>
            <SuperButton>Button</SuperButton>
            <hr/>
            <SuperCheckbox/>
        </div>
    );
};