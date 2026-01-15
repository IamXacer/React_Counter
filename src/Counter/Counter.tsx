import styles from "./Counter.module.css";
import { Button } from "../UI/Button/Button";

type Props = {
    count: number;
    maxValue: number;
    hasError: boolean;
    isConfigured: boolean;
    onInc: () => void;
    onReset: () => void;
    incDisabled: boolean;
    resetDisabled: boolean;
};

export const Counter = ({
                            count,
                            maxValue,
                            hasError,
                            isConfigured,
                            onInc,
                            onReset,
                            incDisabled,
                            resetDisabled,
                        }: Props) => {

    return (
        <div className={styles.panel}>
            <div className={styles.display}>
                {hasError ? (
                    <div className={styles.messageError}>Incorrect value!</div>
                ) : !isConfigured ? (
                    <div className={styles.message}>enter values and press set</div>
                ) : (
                    <div className={count >= maxValue ? `${styles.count} ${styles.red}` : styles.count}>
                        {count}
                    </div>
                )}
            </div>

            <div className={styles.buttons}>
                <Button onClick={onInc} disabled={incDisabled}>
                    inc
                </Button>
                <Button onClick={onReset} disabled={resetDisabled}>
                    reset
                </Button>
            </div>
        </div>
    );
};
