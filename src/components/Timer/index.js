import React, { useState, useEffect } from 'react'
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
        changeInputValues(value);
    }

    const handleSubmit = () => {
        let copy = Object.assign({}, inputValues);

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
