import React from 'react'
import styles from './_clockValue.module.scss';

const ClockValue = ({ time, name, isEditable, handleClockChange }) => {
    return (
        <div className={styles.ClockValue}>
            <input name={name} className={styles.input} type="text" value={time[name]} onChange={e => handleClockChange(e.target)} disabled={!isEditable} maxLength="2" />
        </div>
    )
}

export default ClockValue
