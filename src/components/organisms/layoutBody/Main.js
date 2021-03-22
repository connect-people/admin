import React, { useState } from 'react';
import styles from './Main.module.scss';

const Main = ({ children }) => {



    return(
        <div className={styles.wrap_cp}>
            {children}
        </div>
    );

}

export default Main;
