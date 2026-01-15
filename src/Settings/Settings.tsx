import styles from "./Settings.module.css";
import {NumberInput} from "../UI/NumberInput/NumberInput.tsx";
import {Button} from "../UI/Button/Button.tsx";


type Props = {
    startValue: number;
    maxValue: number;
    onChangeStart: (n: number) => void;
    onChangeMax: (n: number) => void;
    onSet: () => void;
    hasError: boolean;
    setDisabled: boolean;
};

export const Settings = ({
                             startValue,
                             maxValue,
                             onChangeStart,
                             onChangeMax,
                             onSet,
                             hasError,
                             setDisabled,
                         }: Props) => {
    return (
        <div className={styles.panel}>
            <div className={styles.box}>
                <div className={styles.row}>
                    <span className={styles.label}>max value:</span>
                    <NumberInput value={maxValue} onChange={onChangeMax} error={hasError} />
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>start value:</span>
                    <NumberInput value={startValue} onChange={onChangeStart} error={hasError} />
                </div>
            </div>

            <div className={styles.boxBottom}>
                <Button onClick={onSet} disabled={setDisabled} big>
                    set
                </Button>
            </div>
        </div>
    );
};
