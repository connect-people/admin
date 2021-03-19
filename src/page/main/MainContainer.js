import React, {useState, useEffect, useCallback, useRef} from 'react'
import axios from 'axios'
import PAGECONST from './utils/Constants';
import Card from '../../components/molecules/layout/card/Card'

function MainContainer({}) { 
    const [paging, setPaging] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState([])
    const [payload, setPayload] = useState({
        params: {
            page: 1,
            pageCount: PAGECONST.count,
            totalCount: 0
        }
    })
    /* 타겟 엘리먼트 */
    const rootRef = useRef(null);
    const targetRef = useRef(null);

    const getData = () => {
      let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
      axios.get("http://52.78.173.151/boards", {
        "x-api-key": key,
        params:{
          page: payload.params.page,
          count: payload.params.pageCount
        }
        })
        .then( response => {
         if(response){
           const { result, data } = response.data
           if(result.code === 1){
              setIsLoading(true)
              const paging = response.data.paging;
              const newList = response.data.data;
              const updateList = list.concat(newList);
              setList(updateList);
              setPaging(paging)
              setIsLoading(false)
           }
         }
        })
        .catch(err => alert("글을 가져오는데 실패 했습니다."))
    }

    const handlerNaxtBtn = () =>{
      const { page } = payload.params;
      if(Math.ceil(paging.totalCount / paging.count) > payload.params.page){
        setPayload({
          params: {
            ...payload.params,
            page: page + 1,
          }
        })
      }
    }

   

    useEffect(() => {
        getData();
    },[payload])
    useEffect(() =>{
      // console.log('list # ',list)
      // console.log('paging # ',paging)
      // console.log('payload # ',payload)
    },[list, paging])

  
	// /* 인터섹션 callback */
  // const onIntersect = async ([entry], observer) => {
  //   if (entry.isIntersecting) {
  //     observer.unobserve(entry.targetRef);
  //     await handlerNaxtBtn();
  //     observer.observe(entry.targetRef);
  //   }
  // };
  // /* 옵저버 등록 */
  // useEffect(() => {
  //   const observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
  //   // observer.observe(targetRef.current);
  //   return () => observer.disconnect();
  // }, []);

    return (
      <div ref={rootRef}>
        {list.map((el, i) => {
            return (
              <Card className="box" key={i} ref={i == list.length - 1 && !payload.params.totalCount ? targetRef : null} ListData={list} item={el}/>
            );
          })
        }
        <button type="button" onClick={handlerNaxtBtn}>PUSH!</button>
        {isLoading && <p>Loading...</p>}
      </div>
    );
  }

export default MainContainer;


