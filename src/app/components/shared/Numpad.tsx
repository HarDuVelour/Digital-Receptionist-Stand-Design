import React from 'react';
import styles from './Numpad.module.scss';
import SquaredButton from "@/app/components/shared/SquaredButton";

interface Props {
    onNumberClick?: (num: number) => void;
    onDeleteClick?: () => void;
    onClearClick?: () => void;
}

const Numpad: React.FC<Props> = ({onNumberClick, onDeleteClick, onClearClick}) => {
    return (
        <div className={styles.numpadContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                <SquaredButton key={num.toString()} onClick={() => onNumberClick?.(num)} label={num.toString()}/>
            ))}
            <SquaredButton key={"Delete"} onClick={onDeleteClick} label={"Delete"}/>
            <SquaredButton key={"Clear"} onClick={onClearClick} label={"Clear"}/>
        </div>
    );
};

export default Numpad;