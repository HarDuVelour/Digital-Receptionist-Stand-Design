import styles from './DefaultInput.module.scss';

interface Props {
    placeHolder: string;
    value: string;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefaultInput: React.FC<Props> = ({placeHolder, value, onChange}) => {
    return (
        <input
            className={styles.style}
            placeholder={placeHolder}
            value={value}
            onChange={(e) => onChange(e)}
        />
    );
}

export default DefaultInput;