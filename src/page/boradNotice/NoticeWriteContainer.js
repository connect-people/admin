import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../library/API'
import styles from './utils/notice.module.scss'
import Header from '../../components/organisms/layoutHeader/Header'
import Main from '../../components/organisms/layoutBody/Main'
import RoundButton from '../../components/molecules/button/RoundButton'
import TextArea from '../../components/molecules/input/TextArea'


const NoticeWriteContainer = ({}) => {
    const [data, setData] = useState({
            title: '',
            content: '',
            login_id: '',
            member_name: '',
            created: ''
    })
    const [payload, setPayload] = useState({
        params: {
            page:1
        }
    })


    
    const updateNotice = () => {
        let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
        axios.post("http://ec2-3-35-207-154.ap-northeast-2.compute.amazonaws.com/notice", {
          "x-api-key": key,
          })
          .then( response => {
            if(response){
                const { data } = response.data
                if(response.status === 200){
                   console.log('response',response)
                }
            }
        })
        .catch(err => alert("글을 가져오는데 실패 했습니다."))
    }



    const onSaveData = async (data, statusKey) => {
        let response;
        if(statusKey === 'isSave'){
            const requestData = {
                ...data,
            }
            response = await updateNotice(requestData)
        }
    } 
    
    useEffect(() => {
    },[payload])
    
    const setDataByKeyValue = (e, name, value) => {
        let v = value;
        const updateData = {
          ...data,
          [name]: v,
        };
        setData(updateData);
      };
    return(
        <Main>
            <div className="area_item">
                <label className="lab_qna">제목</label>
                    <input 
                    id="title" 
                    type="text" 
                    className="qna_basic inp_contents" 
                    maxLength="50" 
                    placeholder="제목을 입력하세요"
                    onChange={e => {
                    setDataByKeyValue(e, e.target.id, e.target.value);
                    }}
                />
            </div>{console.log('TEST %%% ',data)}
            <div className="area_item">
                <label className="lab_qna">내용</label>
                <textarea
                    id="content"
                    className="col-6"
                    rows="10"
                    cols="50"
                    placeholder="내용을 입력하세요"
                    onChange={e => {
                        setDataByKeyValue(e, e.target.id, e.target.value)
                    }}
                />
            </div>
            <RoundButton title="저장" onClick={() => { onSaveData(data, 'isSave') }}/>
        </Main>
    );

}

export default NoticeWriteContainer;