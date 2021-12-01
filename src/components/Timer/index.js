import React, { useState } from 'react'
import Button from '../Button/index';
import Pin from '../Pin/index';
import Time from '../Time/index';
import styles from './_timer.module.scss';

const Timer = () => {

    const [isEditable, changeEditable] = useState(false);
    const [inputValues, changeInputValues] = useState({ minutes: "00", seconds: "00" });

    const handleClockChange = (value) => {
        let copy = Object.assign({}, inputValues);
        copy[value.name] = value.value;
        changeInputValues(copy);
    }

    const handleSubmit = () => {
        let copy = Object.assign({}, inputValues);

        copy["minutes"] = copy["minutes"].padStart(2, "0");
        copy["seconds"] = copy["seconds"].padStart(2, "0");

        changeInputValues(copy);
        changeEditable(false)
    }

    let panel = isEditable ?
        <Pin type="check" handleClick={handleSubmit} /> :
        <>
            <Button>Start</Button>
            <Pin type="gear" handleClick={() => changeEditable(true)} />
        </>;

    return (
        <div className={styles.timer}>
            <Time isEditable={isEditable} time={inputValues} handleClockChange={handleClockChange} />
            {panel}
        </div>
    )
}

export default Timer
