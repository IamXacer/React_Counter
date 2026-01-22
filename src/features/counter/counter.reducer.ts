import { createAction, createReducer } from "@reduxjs/toolkit";

/* ================= TYPES ================= */

export type CounterState = {
    count: number;
    startValue: number;
    maxValue: number;

    appliedStart: number;
    appliedMax: number;
};

/* ================= LOCAL STORAGE ================= */

const LS = {
    count: "count",
    start: "startValue",
    max: "maxValue",
    appliedStart: "appliedStart",
    appliedMax: "appliedMax",
} as const;


    function readNumber(key: string, fallback: number) {
    const n = Number(localStorage.getItem(key));
    if (!Number.isFinite(n)) return fallback;
    return n;
}

/* ================= INITIAL STATE ================= */

const initialState: CounterState = {
    startValue:readNumber(LS.start,0),
    maxValue:readNumber(LS.max,5),
    count:readNumber(LS.count,0),

    appliedStart:readNumber(LS.appliedStart,readNumber(LS.start,0)),
    appliedMax:readNumber(LS.appliedMax,readNumber(LS.max,5))
};


/* ================= ACTION CREATORS ================= */

// settings
export const setStartValue = createAction<number>("counter/setStartValue");
export const setMaxValue = createAction<number>("counter/setMaxValue");
export const applySettings = createAction("counter/applySettings");

// counter
export const inc = createAction("counter/inc");
export const reset = createAction("counter/reset");

/* ================= REDUCER ================= */

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setStartValue, (state, action) => {
            return { ...state, startValue: action.payload };
        })
        .addCase(setMaxValue, (state, action) => {
            return { ...state, maxValue: action.payload };
        })
        .addCase(applySettings, (state) => {
            return {
                ...state,
                appliedStart: state.startValue,
                appliedMax: state.maxValue,
                count: state.startValue,
            };
        })
        .addCase(inc, (state) => {
            if (state.count >= state.maxValue) return state; // можно вернуть как есть
            return { ...state, count: state.count + 1 };
        })
        .addCase(reset, (state) => {
            return { ...state, count: state.appliedStart };
        });
});

