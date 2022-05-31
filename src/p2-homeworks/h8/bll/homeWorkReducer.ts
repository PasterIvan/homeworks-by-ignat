import {UserType} from "../HW8";

export type sortAT = {
    type: 'sort'
    payload: 'up' | 'down'
}

export type checkAT = {
    type: 'check'
    payload: number
}

export type CounterReducerAT = sortAT | checkAT

export const homeWorkReducer = (state: Array<UserType>, action: CounterReducerAT): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up'
                ? [...state.sort((a, b) => (a.name < b.name ? -1 : 1))]
                : [...state.sort((a, b) => (a.name > b.name ? -1 : 1))]
        }
        case 'check': {
            return [...state.filter(u=> u.age>action.payload)]
        }
        default:
            return state
    }
}
