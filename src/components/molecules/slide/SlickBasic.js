import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../slide/Slick.module.scss';


const SlickBasic = ({}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <Slider {...settings}>
            <div>
                <img src="https://d1cyiajrf0e1fn.cloudfront.net/images/storage/board/20210324/a3b9a63b4e4d4037ca37c9b0f3be0f62.jpg" className={styles.img_thumb}/>
            </div>
            <div>
                <img src="https://d1cyiajrf0e1fn.cloudfront.net/images/storage/board/20210324/a3b9a63b4e4d4037ca37c9b0f3be0f62.jpg" className={styles.img_thumb}/>
            </div>
            <div>
                <img src="https://d1cyiajrf0e1fn.cloudfront.net/images/storage/board/20210324/a3b9a63b4e4d4037ca37c9b0f3be0f62.jpg" className={styles.img_thumb}/>
            </div>
            <div>
                <img src="https://d1cyiajrf0e1fn.cloudfront.net/images/storage/board/20210324/a3b9a63b4e4d4037ca37c9b0f3be0f62.jpg" className={styles.img_thumb}/>
            </div>
            <div>
                <img src="https://d1cyiajrf0e1fn.cloudfront.net/images/storage/board/20210324/a3b9a63b4e4d4037ca37c9b0f3be0f62.jpg" className={styles.img_thumb}/>
            </div><div>
                <img src="https://d1cyiajrf0e1fn.cloudfront.net/images/storage/board/20210324/a3b9a63b4e4d4037ca37c9b0f3be0f62.jpg" className={styles.img_thumb}/>
            </div>
            
        </Slider>
    );
}

export default SlickBasic;