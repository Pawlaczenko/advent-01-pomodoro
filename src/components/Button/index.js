import React from 'react'
import styles from './_button.module.scss';

const Button = (props) => {
    return (
        <button className={styles.button}>
            {props.children}
        </button>
    )
}

export default Button
