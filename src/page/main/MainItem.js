import React from 'react';
import {Link} from 'react-router-dom'
import styles from "./utils/List.module.scss";

const MainItem = ({ item }) => {
  const imageArea = {
      backgroundImage: `url(${item.imageUrl})`,
  }
  return(
    <li>
      <Link className={styles.link_cont} to={{ pathname: `/main/desc/${item.ID}`, state: item}}>
      {/* <Link className={styles.link_cont} to={{ pathname: `https://cplab.page.link/login_success`, state: item}}>
         */}
        {/* <a href="https://cplab.page.link/login_success" className={styles.link_cont}> */}
          <div className={styles.wrap_thumb}>
            <span className={styles.img_thumb} style={imageArea}></span>
          </div>
          <div className={`${styles.info_desc}`}>
            <span className={`${styles.txt_default} ${styles.tit_desc}`}>{item.brandName}</span>
            <span className={`${styles.txt_default} ${styles.txt_desc}`}>{item.content}</span>
            <span className={`${styles.txt_default} ${styles.txt_desc}`}>{item.majorCategoryName}</span>
          </div>
        {/* </a> */}
      </Link>
    </li>
  )
};

export default MainItem;
