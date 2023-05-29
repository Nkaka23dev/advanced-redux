export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const SET = 'set';

export const incremenet = () => {
    return { type: INCREMENT }
}

export const decrement = () => {
    return { type: DECREMENT }
};

export const reset = (value: number) => {
    return { type: SET, payload: value }
}