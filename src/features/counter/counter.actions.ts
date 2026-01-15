import { createAction } from "@reduxjs/toolkit";

export const setStartValue = createAction<number>("counter/setStartValue");
export const setMaxValue = createAction<number>("counter/setMaxValue");

export const applySettings = createAction("counter/applySettings");

export const inc = createAction("counter/inc");
export const reset = createAction("counter/reset");
