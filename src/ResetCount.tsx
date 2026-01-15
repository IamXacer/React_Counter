type Props = {
    setCount: (count: number) => void;
    startValue: number;
    disabled?: boolean;
};

export const ResetCount = ({ setCount, startValue, disabled }: Props) => {
    return (
        <button disabled={disabled} onClick={() => setCount(startValue)}>
            reset
        </button>
    );
};
