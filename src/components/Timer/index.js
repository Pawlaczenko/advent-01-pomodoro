import React, { useState, useEffect } from 'react'
import Button from '../Button/index';
import Pin from '../Pin/index';
import Time from '../Time/index';
import styles from './_timer.module.scss';

const Timer = () => {
    const [isEditable, changeEditable] = useState(false);
    const [inputValues, changeInputValues] = useState({ minutes: "00", seconds: "00" });
    const [seconds, changeSeconds] = useState(0);
    const [interval, changeInterval] = useState(0);
    const [isActive, changeIsActive] = useState(false);

    useEffect(() => {
        if (seconds === 0) stopTheCount();
        let copy = Object.assign({}, inputValues);
        copy["minutes"] = Math.floor(seconds / 60).toString().padStart(2, "0");
        copy["seconds"] = (seconds % 60).toString().padStart(2, "0");
        changeInputValues(copy);
    }, [seconds])

    const stopTheCount = () => {
        changeIsActive(0);
        clearInterval(interval);
    }

    const convertToSeconds = () => {
        let secs = parseInt(inputValues["minutes"], 10) * 60 + parseInt(inputValues["seconds"], 10);
        changeSeconds(secs);
    }

    const handleClockChange = (value) => {
        let copy = Object.assign({}, inputValues);
        copy[value.name] = value.value;
        changeInputValues(copy);
    }

    const handleSubmit = () => {
        let copy = Object.assign({}, inputValues);

        copy["minutes"] = copy["minutes"].padStart(2, "0");
        copy["seconds"] = copy["seconds"].padStart(2, "0");

        if (/^\d+$/.test(copy["minutes"]) && /^\d+$/.test(copy["seconds"]) && copy["seconds"] < 60) {
            changeInputValues(copy);
            changeEditable(false);
            convertToSeconds();
        }
    }

    const startTheClock = () => {
        if (seconds > 0) {
            changeIsActive(1);
            changeInterval(setInterval(() => {
                changeSeconds(seconds => seconds - 1);
            }, 1000));
        }
    }

    const stopTheClock = () => {
        stopTheCount();
        changeSeconds(0);
    }

    let button = isActive ? <Button handleOnClick={stopTheClock} value="Stop" /> : <Button handleOnClick={startTheClock} value="Start" />;

    let panel = isEditable ?
        <Pin type="check" handleClick={handleSubmit} /> :
        <>
            {button}
            <Pin type="gear" handleClick={() => changeEditable(true)} />
        </>;

    let circleColor = "ring" + ((isActive) ? "" : " ending");

    return (
        <>
            <div className={circleColor}>
                <svg width="518" height="518" viewBox="0 0 518 518"><circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" /></svg>
            </div>
            <div className={styles.timer}>
                <Time isEditable={isEditable} time={inputValues} handleClockChange={handleClockChange} />
                {panel}
            </div>
        </>
    )
}

export default Timer
