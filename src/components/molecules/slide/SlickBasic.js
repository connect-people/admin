import React, {useState, useEffect} from 'react';
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
    useEffect(() => {
        setList(imageData)
    }, [])
    // const imageList = imageData;

    // const itemList = imageList.map((item, index) => (
    //     <div key={index}>
    //         <img src={item} className={styles.img_thumb}/>
    //     </div>
    //     )
    // );
    
    return (
        <Slider {...settings}>
            {/* {itemList} */}
        </Slider>
    );
}

export default SlickBasic;