import React from 'react'
import styles from './_button.module.scss';

const Button = ({ handleOnClick, value }) => {
    return (
        <button onClick={handleOnClick} className={styles.button}>
            {value}
        </button>
    )
}

export default Button
