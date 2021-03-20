import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './utils/notice.module.scss'
import Header from '../../components/molecules/layout/layoutHeader/Header'

const NoticeDescContainer = ({match}) => {
    const [data, setData] = useState([]);
    const [payload, setPayload] = useState({
        params: {
            id: match.params.id
        }
    })

    const getData = (match) => {
        let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc '
        axios.get(`http://ec2-3-35-207-154.ap-northeast-2.compute.amazonaws.com/notice/${payload.params.id}`, {
          "x-api-key": key,
          
          })
          .then( response => {
           if(response){
             const { data } = response.data
             if(response.status === 200){
                 console.log('TEST',response.data)
                 const resData = response.data
                 setData(resData)
             }
           }
          })
          .catch(err => alert("글을 가져오는데 실패 했습니다."))
      }
    useEffect(() => {
        getData();
    },[payload])

    return(
        <div id="cpWrap" className={`${styles.wrap_cp} ${styles.wrap_notice}`}>
            <Header/>
            <main id="cpContent" className={`${styles.section_notice}`}>
                <div className={`${styles.tit_unit}`}>
                    <span className={`${styles.theme_info}`}>
                        <span className={`${styles.txt_tit}`}>{data.title}</span>
                        <span className={`${styles.txt_date}`}>{data.created}</span>
                    </span>
                </div>
                <div className={`${styles.cont_unit}`}>
                    <span className={`${styles.theme_info}`}>
                        <span className={`${styles.view_cont}`}>{data.content}</span>
                    </span>
                </div>
            </main>
        </div>
    );

}

export default NoticeDescContainer;