import React, {useState, useEffect, useCallback, useRef} from 'react'
import axios from 'axios'
import PAGECONST from './utils/Constants';
import Card from '../../components/molecules/layout/card/Card';
import styles from './utils/main.module.scss'

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
    console.log('TEST')
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



// options 설정
const options = {
  root: document.querySelector('.container'), // .container class를 가진 엘리먼트를 root로 설정. null일 경우 브라우저 viewport
  rootMargin: '10px', // rootMargin을 '10px 10px 10px 10px'로 설정
  threshold: [0, 0.5, 1] // 타겟 엘리먼트가 교차영역에 진입했을 때, 교차영역에 타켓 엘리먼트의 50%가 있을 때, 교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응한다.
}

// IntersectionObserver 생성
const io = new IntersectionObserver((entries, observer) => {
  // IntersectionObserverEntry 객체 리스트와 observer 본인(self)를 받음
  // 동작을 원하는 것 작성
  entries.forEach(entry => {
    // entry와 observer 출력
    console.log('entry:', entry);
    console.log('observer:', observer);
  })
}, options)


  // /* 인터섹션 callback */
  // const onIntersect = async ([entry], observer) => {
  //   if (entry.isIntersecting) {
  //     observer.unobserve(entry.targetRef);
  //     await getData();
  //     observer.observe(entry.targetRef);
  //   }
  // };
  // useEffect(() => {
  //   let observer;
  //   if (targetRef) {
  //     observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
  //     observer.observe(targetRef);
  //   }
  //   return () => observer && observer.disconnect();
  // }, [targetRef]);

  //   let observer;
  //   let options = {
  //     root: null,
  //     rootMargin: '10px',
  //     threshold: 0.1
  //   }
  //   overserver = new IntersectionObserver(handleIntersect, options)
  //   observer.observe(boxElement);

  //   function handleIntersect(entries, observer) {
  //     entries.forEach((entry) => {
  //       //DOM = entry.target으로 지정하면 해당 요소 관찰
  //       if (entry.intersectionRatio > prevRatio) {
  //         entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
  //       } else {
  //         entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
  //       }
    
  //       prevRatio = entry.intersectionRatio;
  //     });
  //   }

  //   observerHandler = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       console.log(this);

  //       if (entry.isIntersecting) {
  //         console.log("print");
  //         const image = entry.target;
  //         const src = image.dataset.src; // img 태그의 data-lazy에 저장해둔 이미지 경로를 붙여준다.
  //         image.setAttribute("src", src);
  //         image.removeAttribute("data-src");
  //         observer.unobserve(entry.target);
  //       }
  //     }, {
  //       rootMargin: '1px 1px 1px 1px',
  //       thresholds: [0.7],
  //     });
  //   }

  // lazyLoadHandler= () => {
  //     this.lazyImages = Array.prototype.slice.call(
  //       // document.body.querySelectorAll(".image")
  //     );

  //     this.intersectionObserver = new IntersectionObserver(this.observerHandler.bind(this), this.options);

  //     this.lazyImages.forEach((item) => this.intersectionObserver.observe(item));
  //   }
// ref={rootRef}
  return (
    <div className="container">
      {list.map((el, i) => {
          return (
            // <Card className="box" key={i} ref={i == list.length - 1 && !payload.params.totalCount ? targetRef : null} ListData={list} item={el}/>
            <Card className="box" key={i} ListData={list} item={el}/>
          );
        })
      }
      {Math.ceil(paging.totalCount / paging.count) > payload.params.page &&
      <button type="button" className={`${styles.btn_more}`} onClick={handlerNaxtBtn}>더보기</button>
      }
      {/* <div ref={targetRef} className="spinner">Loading...</div> */}
      {/* {isLoading && <p>Loading...</p>} */}
    </div>
  );
}

export default MainContainer;


