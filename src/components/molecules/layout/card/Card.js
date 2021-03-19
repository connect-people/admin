import React, { useState } from 'react';
import styles from './card.module.scss'






const Card = ({ ListData, item }) => {
    const [list, setList] = useState(item);
    // const styles = {
    //     float: 'left',
    //     width: 'calc(50% - 2px)',
    //     height: '150px',
    //     // margin: '5px',
        
    // }
    const imageArea = {
        background: `url(${list.imageUrl})`,
        backgroundRepeat: 'no-repeat', // background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.
        backgroundSize: '100% 100%', // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
        backgroundPosition: 'center', // background-image가 컨테이너에 가운데로 오도록 한다. 
    }
    const fontStyle = {
        display: 'block',
        fontSize: 12,
    }

 
    return(
        <div className={`${styles.unit_card}`}>
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
        </div>  
    );
}

export default Card;