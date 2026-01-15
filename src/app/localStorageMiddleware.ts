import type {Middleware} from "@reduxjs/toolkit";


const LS = {
    count: "count",
    start: "startValue",
    max: "maxValue",
    appliedStart: "appliedStart",
    appliedMax: "appliedMax",
} as const;

export const localStorageMiddleware: Middleware =
    (store) => (next) => (action) => {
        const result = next(action);

        // state типизируем локально, чтобы не тянуть RootState и не делать цикл
        const state = store.getState() as {
            counter: {
                count: number;
                startValue: number;
                maxValue: number;
                appliedStart: number;
                appliedMax: number;
            };
        };

        const c = state.counter;

        localStorage.setItem(LS.count, String(c.count));
        localStorage.setItem(LS.start, String(c.startValue));
        localStorage.setItem(LS.max, String(c.maxValue));
        localStorage.setItem(LS.appliedStart, String(c.appliedStart));
        localStorage.setItem(LS.appliedMax, String(c.appliedMax));

        return result;
    };