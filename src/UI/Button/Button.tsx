import styles from "./Button.module.css";

type Props = {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    big?: boolean;
};

export const Button = ({ children, onClick, disabled, big }: Props) => {
    return (
        <button
            className={big ? `${styles.btn} ${styles.big}` : styles.btn}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
