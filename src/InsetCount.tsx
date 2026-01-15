type Props = {
    count: number;
    setCount: (count: number) => void;
    maxValue: number;
    disabled?: boolean;
};

export const InsertCount = ({ setCount, count, maxValue, disabled }: Props) => {
    const insertHandler = () => {
        if (count < maxValue) setCount(count + 1);
    };

    return (
        <button disabled={disabled} onClick={insertHandler}>
            inc
        </button>
    );
};
