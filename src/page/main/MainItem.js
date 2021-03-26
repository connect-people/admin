import React from 'react';
import {Link} from 'react-router-dom'
import styles from "./utils/List.module.scss";

const MainItem = ({ item }) => {
  const imageArea = {
      backgroundImage: `url(${item.imageUrl})`,
  }
  return(
    <li>
      <a className={styles.link_cont}>
       
          <div className={styles.wrap_thumb}>
            <span className={styles.img_thumb} style={imageArea}></span>
          </div>
          <div className={`${styles.info_desc}`}>
            <span className={`${styles.txt_default} ${styles.tit_desc}`}>{item.brandName}</span>
            <span className={`${styles.txt_default} ${styles.txt_desc}`}>{item.content}</span>
            <span className={`${styles.txt_default} ${styles.txt_desc}`}>{item.majorCategoryName}</span>
          </div>
           {/* <div className="no">{item.brandName}</div> */}
          {/* <div className="content"> */}
          {/* <img src={`${item.imageUrl}`} className={styles.img_thumb} alt=""/> */}
          {/* <div className="_id"></div>
          <div className="text"></div> */}
        {/* </div>  */}
      </a>
    </li>
  )
};

export default MainItem;
