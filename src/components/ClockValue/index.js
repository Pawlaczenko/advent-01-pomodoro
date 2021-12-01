import React, { useState } from 'react'
import styles from './_clockValue.module.scss';

const ClockValue = ({ value, name, isEditable, handleClockChange }) => {
    return (
        <div className={styles.ClockValue}>
            <input name={name} className={styles.input} type="text" value={value} onChange={e => handleClockChange(e.target)} disabled={!isEditable} maxLength="2" />
        </div>
    )
}

export default ClockValue
