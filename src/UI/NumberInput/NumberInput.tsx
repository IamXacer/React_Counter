import styles from "./NumberInput.module.css";

type Props = {
    value: number;
    onChange: (n: number) => void;
    error?: boolean;
};

export const NumberInput = ({ value, onChange, error }: Props) => {
    return (
        <input
            className={error ? `${styles.input} ${styles.error}` : styles.input}
            type="number"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
        />
    );
};
