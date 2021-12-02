import React from 'react'
import styles from './_time.module.scss';
import ClockValue from '../ClockValue/index.js';

const Time = ({ isEditable, time, handleClockChange }) => {
    return (
        <div className={styles.time}>
            <ClockValue name="minutes" isEditable={isEditable} time={time["minutes"]} handleClockChange={handleClockChange} />
            <div className="colon">:</div>
            <ClockValue name="seconds" isEditable={isEditable} time={time["seconds"]} handleClockChange={handleClockChange} />
        </div>
    )
}

export default Time
