import React, { useState } from 'react';
import styles from '../layoutHeader/header.module.scss'

const Header = ({}) => {


    return(
        <header className={`${styles.head_cp} ${styles.head_notice}`}>
            <div id="headInfo" className={`${styles.head_info} ${styles.head_sub}`}>
                <a href="#none" className="link_back">
                    <span className="ico_snippet ico_arr_b">뒤로가기</span>
                </a> 
                <span className="sub_title sub_page">서비스 공지사항</span>
            </div>
        </header>
    );

}

export default Header;