import React, {useState, useEffect, useCallback, useRef} from 'react'
import axios from 'axios'
import useIntersectionObserver from '../../organisms/UseIntersectionObserver';


  
/* fake */
const fakeFetch = (delay = 1000) => new Promise(res => setTimeout(res, delay));
/* 리스트 아이템 */
const ListItem = ({ number }) => (
  <div className="ListItem">
    <span>{number}</span>
  </div>
);

function ListView() {
  /* 아이템 개수와 현재 로딩 상태 */
  const [state, setState] = useState({ itemCount: 0, isLoading: false });
  const [paging, setPaging] = useState({})
  const [list, setList] = useState([])
  const [payload, setPayload] = useState({
    params: {
      page: 1,
      pageCount: 20,
      totalCount: 0
    }
  })
  /* fake 비동기 아이템 로드 */
  const fetchItems = async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    await fakeFetch();
    setState(prev => ({
      itemCount: prev.itemCount + 10,
      isLoading: false
    }));
  };

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
            // setIsLoading(true)
            const paging = response.data.paging;
            const newList = response.data.data;
            setList(newList);
            setPaging(paging)
            // if (list){
            //   const updateList = list.concat(newList);
            //   setList(updateList);
            // } 
            // setPaging(paging)
            // setIsLoading(false)
         }
       }
      })
      .catch(err => alert("글을 가져오는데 실패 했습니다."))
  }
  /* 초기 아이템 로딩 */
  useEffect(() => {
    fetchItems();
  }, []);
  
	/* 타겟 엘리먼트 */
  const target = useRef(null);
	/* 인터섹션 callback */
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await fetchItems();
      observer.observe(entry.target);
    }
  };
  /* 옵저버 등록 */
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
    observer.observe(target.current);
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    getData();
  },[payload])

  useEffect(() =>{
    console.log('list # ',list)
    console.log('paging # ',paging)
    console.log('payload # ',payload)
  },[list, paging])

  const { itemCount, isLoading } = state;
  return (
    <div>
      {[...Array(itemCount)].map((_, i) => {
        return <ListItem key={i} number={i} />;
      })}
      <div ref={target} className="Loading">
        {isLoading && "Loading..."}
      </div>
    </div>
  );
}

export default ListView;


