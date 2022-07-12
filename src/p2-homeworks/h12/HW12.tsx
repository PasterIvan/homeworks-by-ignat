import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./HW12.module.css";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC, ThemesType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'blue', 'silver', 'gold'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.startTheme);

    const dispatch = useDispatch()
    const onChangeCallback = (theme: ThemesType) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            /></div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
