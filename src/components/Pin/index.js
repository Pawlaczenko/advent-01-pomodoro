import React from 'react'
import styles from './_pin.module.scss';
import gear from '../../assets/images/gear.svg';
import check from '../../assets/images/check.svg';

const Pin = ({ handleClick, type }) => {
    return (
        <button onClick={handleClick} className={styles.pin}>
            <img src={(type == "gear") ? gear : check} alt="Settings" />
        </button>
    )
}

export default Pin
