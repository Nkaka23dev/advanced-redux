import { DECREMENT, INCREMENT, SET } from "./actions"

const initialState = {
    value: 0
}

export const reducer = (state = initialState, action: any) => {
    if (action.type === INCREMENT) {
        return {
            ...state, value: action.value + 1
        }
    }
    if (action.type === DECREMENT) {
        return {
            ...state, value: action.value + 1
        }
    }
    if (action.type === SET) {
        return {
            ...state, value: action.payload
        }
    }
    return state;
}