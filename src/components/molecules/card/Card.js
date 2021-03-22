import React, { useState } from 'react';
import styles from './card.module.scss'

const Card = ({ ListData, item }) => {
    const [list] = useState(item);
    // const imageArea = {
    //     background: `url(${list.imageUrl})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: '100% 100%',
    //     backgroundPosition: 'center',
    // }
    return(
        <div className={`${styles.unit_card}`}>
            <a href="#none" className={`${styles.link_item}`}>
                <div className={`${styles.container_thumb}`}>
                    <div className={`${styles.area_img}`}>
                        <img src={`${list.imageUrl}`} className={`${styles.img_thumb}`}/>
                        {/* <span className={`${styles.img_desc}`} style={imageArea}></span> */}
                    </div>
                </div>
                <div className={`${styles.info_desc}`}>
                    <span className={`${styles.txt_default} ${styles.tit_desc}`}>{list.brandName}</span>
                    <span className={`${styles.txt_default} ${styles.txt_desc}`}>{list.content}</span>
                    <span className={`${styles.txt_default} ${styles.txt_desc}`}>{list.majorCategoryName}</span>
                </div>
            </a>
        </div>  
    );
}

export default Card;