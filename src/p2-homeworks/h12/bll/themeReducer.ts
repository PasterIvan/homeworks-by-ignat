export type ThemesType = 'dark'| 'red' | 'some'
type ChangeThemeAT = ReturnType<typeof changeThemeC>
type InitialStateType = typeof initState

const initState = {
startTheme: 'dark'
};

export const themeReducer = (state = initState, action: ChangeThemeAT): InitialStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, startTheme: action.theme}
        }
        default: return state;
    }
};

export const changeThemeC = (theme: ThemesType) => {
    return {type: "CHANGE-THEME", theme} as const
};