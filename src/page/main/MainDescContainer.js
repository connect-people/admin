import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import styles from './utils/Main.module.scss'
import SlickBasic from '../../components/molecules/slide/SlickBasic';
const MainDescContainer = ({match}) => {
    const [data, setData] = useState([]);
    const noticeCode = match.params.boardCode
    // const payload = useState({
    //     params: {
    //         id: match.params.id
    //     }
    // }) 
    
    
    let history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const getData = useCallback(() => {
        let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
        axios.get(`http://52.78.173.151//boards/${noticeCode}/detail`, {
          "x-api-key": key,
          })
          .then( response => {
           if(response){
             const { data } = response.data
             if(response.status === 200){
                 console.log('response',data)
                 const resData = response.data.data
                 setData(resData)
             }
           }
        })
        .catch(err => alert("글을 가져오는데 실패 했습니다."))
    }, [])
    useEffect(() => {
        getData();
    },[getData])

    return(
        <div>
            <SlickBasic imageData={data.imageUrls}/>
            <div className={styles.cont_top}>
                <span className={styles.theme_info}>
                    <span className={styles.txt_tit}>{data.title}</span>
                    <span className={styles.txt_date}>{data.created}</span>
                </span>
            </div>
            <span className={styles.line_grey}></span>
            <div className={styles.cont_unit}>
                <span className={styles.theme_info}>
                    <span className={styles.txt_date}>{data.brandName}</span>
                    <span className={styles.view_cont}>{data.content}</span>
                </span>
            </div>
        </div>
    );

}

export default MainDescContainer;