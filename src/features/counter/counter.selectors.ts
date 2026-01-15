import type {RootState} from "../../app/store.ts";


export const selectCount = (s: RootState) => s.counter.count;
export const selectStartValue = (s: RootState) => s.counter.startValue;
export const selectMaxValue = (s: RootState) => s.counter.maxValue;

export const selectAppliedStart = (s: RootState) => s.counter.appliedStart;
export const selectAppliedMax = (s: RootState) => s.counter.appliedMax;

export const selectHasError = (s: RootState) => {
    const { startValue, maxValue } = s.counter;
    return startValue < 0 || maxValue <= 0 || startValue >= maxValue;
};

export const selectIsConfigured = (s: RootState) => {
    const { startValue, maxValue, appliedStart, appliedMax } = s.counter;
    return startValue === appliedStart && maxValue === appliedMax;
};
