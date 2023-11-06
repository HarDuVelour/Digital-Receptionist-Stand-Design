import styles from './Card.module.scss';

interface Props {
    header?: string;
    description?: string;
    children?: React.ReactNode;
}

const LeftCard: React.FC<Props> = ({header, description, children}) => {
    return (
        <div className={styles.leftCard}>
            {header && <h2>{header}</h2>}
            {description && <p>{description}</p>}
            {children}
        </div>
    );
};

export default LeftCard;