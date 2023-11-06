import React, {useState} from 'react';
import styles from './Qwerty.module.scss';
import SquaredButton from "@/app/components/shared/SquaredButton";

interface Props {
    onKeyClick?: (key: string) => void;
    onDeleteClick?: () => void;
    onClearClick?: () => void;
}

const Qwerty: React.FC<Props> = ({onKeyClick, onDeleteClick, onClearClick}) => {
    const [isShiftEnabled, setShiftEnabled] = useState(false);

    const rows = isShiftEnabled ? [
        ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ] : [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];

    return (
        <div className={styles.qwertyContainer}>
            {rows.map((row, rowIndex) => (
                <div className={styles.row} key={`row-${rowIndex}`}>
                    {row.map((key) => (
                        <SquaredButton key={key} onClick={() => onKeyClick?.(key)} label={key}/>
                    ))}
                </div>
            ))}
            <div className={styles.specialKeys}>
                <SquaredButton key={"Shift"} onClick={() => setShiftEnabled(!isShiftEnabled)}
                               label={isShiftEnabled ? "Unshift" : "Shift"}/>
                <SquaredButton key={"Delete"} onClick={onDeleteClick} label={"Delete"}/>
                <SquaredButton key={"Clear"} onClick={onClearClick} label={"Clear"}/>
            </div>
        </div>
    );
};

export default Qwerty;