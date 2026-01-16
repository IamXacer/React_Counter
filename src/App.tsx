import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import styles from "./App.module.css";

import { Settings } from "./Settings/Settings";
import {
    selectAppliedStart,
    selectCount, selectHasError, selectIsConfigured,
    selectMaxValue,
    selectStartValue
} from "./features/counter/counter.selectors.ts";
import {Counter} from "./Counter/Counter.tsx";
import {applySettings, inc, reset, setMaxValue, setStartValue} from "./features/counter/counter.reducer.ts";



const LS = {
    count: "count",
    start: "startValue",
    max: "maxValue",
} as const;

export default function App() {
    const dispatch = useAppDispatch();

    const count = useAppSelector(selectCount);
    const startValue = useAppSelector(selectStartValue);
    const maxValue = useAppSelector(selectMaxValue);
    const appliedStart = useAppSelector(selectAppliedStart);

    const hasError = useAppSelector(selectHasError);
    const isConfigured = useAppSelector(selectIsConfigured);

    useEffect(() => {
        localStorage.setItem(LS.count, String(count));
    }, [count]);

    useEffect(() => {
        localStorage.setItem(LS.start, String(startValue));
    }, [startValue]);

    useEffect(() => {
        localStorage.setItem(LS.max, String(maxValue));
    }, [maxValue]);

    const incDisabled = hasError || !isConfigured || count >= maxValue;
    const resetDisabled = hasError || !isConfigured || count === appliedStart;
    const setDisabled = hasError || isConfigured;

    return (
        <div className={styles.app}>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                onChangeStart={(n) => dispatch(setStartValue(n))}
                onChangeMax={(n) => dispatch(setMaxValue(n))}
                onSet={() => dispatch(applySettings())}
                hasError={hasError}
                setDisabled={setDisabled}
            />

            <Counter
                count={count}
                maxValue={maxValue}
                hasError={hasError}
                isConfigured={isConfigured}
                onInc={() => dispatch(inc())}
                onReset={() => dispatch(reset())}
                incDisabled={incDisabled}
                resetDisabled={resetDisabled}
            />
        </div>
    );
}
