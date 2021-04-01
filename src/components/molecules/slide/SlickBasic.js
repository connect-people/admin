import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../slide/Slick.module.scss';


const SlickBasic = ({imageData}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [list, setList] = useState([]);
    console.log('#####', imageData)
    console.log('#####', list)

    
    return (
        <Slider {...settings}>
                {imageData && imageData.map((item, idx) => 
                <div key={idx}>
                     <div className={styles.wrap_thumb}>
                        <span className={styles.img_thumb} style={{backgroundImage:`url(${item})`}}></span>
                    </div>
                </div>)}
        </Slider>
    );
}

export default SlickBasic;