import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './utils/notice.module.scss'
import Header from '../../components/organisms/layoutHeader/Header'


const NoticeListContainer = () => {
    const [list, setList] = useState([]);
    const [payload] = useState({
        params: {
            page:1
        }
    })
    
    const getData = () => {
        let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
        axios.get('https://bycf8blope.execute-api.ap-northeast-2.amazonaws.com/dev/v1/notice/', {
          'x-api-key': key,
          params:{
          }
          })
          .then( response => { 
           if(response){
             const { data } = response.data
             if(response.status === 200){
                 console.log('RESPONSE',response.data.items)
                 const resData = response.data.items
                 setList(resData)
             }
           }
          })
          .catch(err => alert("글을 가져오는데 실패 했습니다."))
      }
    const boardListContent = () => {
        return list.map((item, idx) => {
            return (
                <Link key={idx} className={`${styles.link_unit} ${styles.notify}`} to={{ pathname: `/notice/desc/${item.id}`, state: list}}>
                    <span className={`${styles.theme_info}`}>
                        <span className={`${styles.cont_desc}`}>{item.title}</span>
                        <span className={`${styles.txt_date}`}>{item.created}</span>
                    </span>
                    <span className={`${styles.theme_arr}`}>
                        <span className={`ico_snippet ico_arr_r ${styles.ico_arr_r}`}></span>
                    </span>
                </Link>
            )
        })
    }  
    useEffect(() => {
        getData();
    },[payload])
    

    return(
        <div id="cpWrap" className={`${styles.wrap_cp} ${styles.wrap_notice}`}>
            <Header title="공지사항" btnOption={false}/>
            <main id="cpContent" className={`${styles.section_notice}`}>
                {list ?
                    boardListContent()
                    : <div className="info_state">
                    <span className="txt_state">목록의 끝입니다.</span>
                </div>
                }
            </main>
        </div>
    );

}

export default NoticeListContainer;