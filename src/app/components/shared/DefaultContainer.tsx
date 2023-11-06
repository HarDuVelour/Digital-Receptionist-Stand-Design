import styles from './DefaultContainer.module.scss';

interface Props {
    children: React.ReactNode;
}

const DefaultContainer: React.FC<Props> = ({children}) => {
    return (
        <div className={styles.style}>
            {children}
        </div>
    );
}

export default DefaultContainer;