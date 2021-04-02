import React, {useState} from 'react';
import styles from '../layoutHeader/header.module.scss'

const Header = ({title, onClick, btnOption}) => {
    console.log('btnOption',btnOption)



    return(
        <header className={`${styles.head_cp} ${styles.head_notice}`}>
            <div id="headInfo" className={`${styles.head_info} ${styles.head_sub}`}>
                <button type="button" className={`${styles.link_back} ${btnOption ? `${styles.show}`: ''}`} onClick={onClick}>
                    <span className={`ico_snippet ${styles.ico_arr_b}`}>뒤로가기</span>
                </button> 
                <span className={`${styles.sub_title} ${styles.sub_page}`}>{title}</span>
            </div>
        </header>
    );

}

export default Header;