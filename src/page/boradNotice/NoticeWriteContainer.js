import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './utils/notice.module.scss'
import Header from '../../components/molecules/layout/layoutHeader/Header'


const NoticeWriteContainer = ({}) => {
    const [list, setList] = useState([]);
    const [payload, setPayload] = useState({
        params: {
            page:1
        }
    })
    
    const postData = () => {
        let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc '
        axios.post("http://ec2-3-35-207-154.ap-northeast-2.compute.amazonaws.com/notice", {
          "x-api-key": key,
          params:{
          }
          })
          .then( response => {
           if(response){
             const { data } = response.data
             if(response.status === 200){
                 console.log('TEST',data)
                 const resData = response.data.data
                 setList(resData)
             }
           }
          })
          .catch(err => alert("글을 가져오는데 실패 했습니다."))
      }
    useEffect(() => {
    },[payload])
    

    return(
        <>
        <div class="area_item">
            <label class="lab_qna">제목</label>
            <span class="txt_count">(<span id="titleCount" class="txt_count">0</span>/50)</span>
            <input id="inpTitle" type="text" class="qna_basic inp_contents" maxlength="50" placeholder="제목을 입력하세요" onkeyup="handlerCount(titleCount, inpTitle)"/>
        </div>
        <div class="area_item">
            <label class="lab_qna">내용</label>
            <span class="txt_count">(<span id="contentsCount" class="txt_count">0</span>/1000)</span>
            <textarea id="inpContents" class="qna_basic inp_contents" maxlength="1000" placeholder="내용을 입력하세요" onkeyup="handlerCount(contentsCount, inpContents)"></textarea>
        </div>
        </>
    );

}

export default NoticeWriteContainer;