import React from 'react';
import styles from './Main.module.scss';

const PanelHead = ({ children }) => {



    return(
        <div className={styles.wrap_cp}>
            {children}
        </div>
    );

}

export default PanelHead;
