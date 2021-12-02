import React from 'react'
import styles from './_clockValue.module.scss';

const ClockValue = ({ time, name, isEditable, handleClockChange }) => {
    return (
        <div className={styles.ClockValue}>
            <input maxLength="2" name={name} className={styles.input} type="text" value={time} onChange={e => handleClockChange(e.target)} disabled={!isEditable} />
        </div>
    )
}

export default ClockValue
