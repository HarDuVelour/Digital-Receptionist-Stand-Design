import styles from './SquaredButton.module.scss';

interface Props {
    key?: string;
    label: string;
    onClick?: (value?: any) => void;
    type?: 'button' | 'submit' | 'reset';
}

const SquaredButton: React.FC<Props> = ({key, label, onClick, type = 'button'}) => {
    return (
        <button key={key} className={styles.button} onClick={onClick} type={type}>
            {label}
        </button>
    );
};

export default SquaredButton;