export type LoadingActionType = ReturnType<typeof loadingAC>

export type initStateType = typeof initState

const initState = {
    startLoading: false
}

export const loadingReducer = (state: initStateType = initState, action: LoadingActionType): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, startLoading:action.startLoading}
        }
        default: return state
    }
}

export const loadingAC = (startLoading: boolean) => {
    return {
        type: 'LOADING', startLoading
    } as const
} // fix any