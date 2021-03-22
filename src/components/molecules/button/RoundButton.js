import React, { useState } from 'react';
import styles from './button.module.scss'

const RoundButton = ({ title, onClick }) => {
    
    
    return(
        <button type="button" className={styles.btn_basic} onClick={onClick}>
            <span className={styles.txt_basic}>{title}</span>
        </button>
    );
}

export default RoundButton;