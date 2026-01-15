type Props = {
    startValue: number;
    setCount: (n: number) => void;
};

export const SetCount = ({ startValue, setCount }: Props) => {
    return <button onClick={() => setCount(startValue)}>set</button>;
};
