import React from 'react';
import styles from './Main.module.scss';

const Main = ({ children, className }) => {



    return(
        <div className={`${styles.wrap_cp} ${className}`}>
            {children}
        </div>
    );

}

export default Main;
