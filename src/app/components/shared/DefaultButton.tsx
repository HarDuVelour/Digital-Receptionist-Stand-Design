import styles from './DefaultButton.module.scss';
import React from "react";

interface Props {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const DefaultButton: React.FC<Props> = ({label, onClick, type = 'button'}) => {
    return (
        <button className={styles.style} title={label} onClick={onClick} type={type}>
            {label}
        </button>
    )
}

export default DefaultButton;