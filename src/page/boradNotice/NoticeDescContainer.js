import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import styles from './utils/notice.module.scss'
import Header from '../../components/organisms/layoutHeader/Header'
import Main from '../../components/organisms/layoutBody/Main'

const NoticeDescContainer = ({match}) => {
    const [data, setData] = useState([]);
    const noticeCode = match.params.id
    console.log('noticeCode',noticeCode)
    const payload = useState({
        params: {
            id: match.params.id
        }
    }) 
    
    
    let history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const getData = useCallback(() => {
        let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
        axios.get(`http://ec2-3-35-207-154.ap-northeast-2.compute.amazonaws.com/notice/${noticeCode}`, {
          "x-api-key": key,
          })
          .then( response => {
           if(response){
             const { data } = response
             if(response.status === 200){
                 console.log('response',data)
                 const resData = response.data
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
        <div id="cpWrap" className={`${styles.wrap_cp} ${styles.wrap_notice}`}>
            <Header title="서비스 공지사항" btnOption={true} onClick={goBack}/>
            <div id="cpContent" className={`${styles.section_notice}`}>
                <Main className={`${styles.tit_unit}`}>
                    <span className={`${styles.theme_info}`}>
                        <span className={`${styles.txt_tit}`}>{data.title}</span>
                        <span className={`${styles.txt_date}`}>{data.created}</span>
                    </span>
                </Main>
                <Main className={`${styles.cont_unit}`}>
                    <span className={`${styles.theme_info}`}>
                        <span className={`${styles.view_cont}`}>{data.content}</span>
                    </span>
                </Main>
            </div>
        </div>
    );

}

export default NoticeDescContainer;