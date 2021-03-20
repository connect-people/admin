import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './utils/notice.module.scss'
import Header from '../../components/molecules/layout/layoutHeader/Header'


const NoticeListContainer = ({}) => {
    // const [data, setData] = useState({
    //     id: 0,
    //     title: '',
    //     content: '',
    //     login_id: '',
    //     member_name: '',
    //     created: ''
        
    // })
    const [list, setList] = useState([]);
    
    const getData = () => {
        let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc '
        axios.get("52.78.173.151/default/notice", {
          "x-api-key": key,
          params:{
            // page: payload.params.page,
            // count: payload.params.pageCount
          }
          })
          .then( response => {
           if(response){
             const { result, data } = response.data
             if(result.code === 1){
                 console.log('TEST',response)
                // setIsLoading(true)
                // const paging = response.data.paging;
                // const newList = response.data.data;
                // const updateList = list.concat(newList);
                // setList(updateList);
                // setPaging(paging)
                // setIsLoading(false)
             }
           }
          })
          .catch(err => alert("글을 가져오는데 실패 했습니다."))
      }
    useEffect(() => {
        getData();
    },[list])
    

    return(
        <div id="cpWrap" className={`${styles.wrap_cp} ${styles.wrap_notice}`}>
            <Header/>
            <main id="cpContent" className={`${styles.section_notice}`}>
                <a href="#none" className={`${styles.link_unit} ${styles.notify}`}>
                    <span className={`${styles.theme_info}`}>
                        <span className={`${styles.cont_desc}`}>신 통합회원 전환 시행 안내 (유예기간) 통합회원 정책 업데이트와 더불어 기존 일반 회원을 신통합회원 업데이트와 더불어 기존 일반 회원을 신통합회원 업데이트와 더불어 기존 일반 회원을 신통합회원</span>
                        <span className={`${styles.txt_date}`}>2020.12.31</span>
                    </span>
                    <span className={`${styles.theme_arr}`}>
                        <span className={`${styles.ico_snippet} ${styles.ico_arr_r}`}></span>
                    </span>
                </a>
                <a href="#none" className={`${styles.link_unit}`}>
                    <span className={`${styles.theme_info}`}>
                        <span className={`${styles.cont_desc}`}>신 통합회원 전환 시행 안내 (유예기간) 통합회원 정책 업데이트와 더불어 기존 일반 회원을 신통합회원 업데이트와 더불어 기존 일반 회원을 신통합회원 업데이트와 더불어 기존 일반 회원을 신통합회원</span>
                        <span className={`${styles.txt_date}`}>2020.12.31</span>
                    </span>
                    <span className={`${styles.theme_arr}`}>
                        <span className={`${styles.ico_snippet} ${styles.ico_arr_r}`}></span>
                    </span>
                </a>
                <div className="info_state">
                    <span className="txt_state">목록의 끝입니다.</span>
                </div>
            </main>
        </div>
    );

}

export default NoticeListContainer;