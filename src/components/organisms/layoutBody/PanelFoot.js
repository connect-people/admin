import React, { useState } from 'react';
import styles from './Main.module.scss';

const PanelFoot = ({ children }) => {



    return(
        <div className={styles.wrap_cp}>
            {children}
        </div>
    );

}

export default PanelFoot;
