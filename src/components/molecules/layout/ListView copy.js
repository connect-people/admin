import React, {useState, useEffect, useCallback, useRef} from 'react'
import axios from 'axios'
import useIntersectionObserver from '../../organisms/UseIntersectionObserver'


// export default ({ root, target, onIntersect, threshold = 1.0, rootMargin = "0px" }) => {
//     useEffect(
//       () => {
  
//         if (!root) {
//           return;
//         }
  
//         const observer = new IntersectionObserver(onIntersect, {
//           root,
//           rootMargin,
//           threshold,
//         });
  
//         if (!target) {
//           return;
//         }
  
//         observer.observe(target);
  
//         return () => {
//           observer.unobserve(target);
//         };
//       }, [target, root, rootMargin, onIntersect, threshold]
//     );
//   };



// import Infinite from './Infinite'

function ListView({}) {
    // instance variable
    const currentPage = useRef(1);
    const totalPage = useRef(0);

    // request state
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // contents list
    const [images, setImages] = useState([]);

    // ref
    const rootRef = useRef(null);
    const targetRef = useRef(null);

    useEffect(() => {
        searchImage()
    },[])

    const loadRandomImage = () => {
        let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
        axios.get("http://52.78.173.151/boards", {
          "x-api-key": key,
          })
          .then(response => {
                const { result, data } = response.data;
                if(response){
                    if(result.code === 1 ){
                        const images = response.data.data;
                        // const { totalCount } = response.data.paging;

                        setImages(images || []);
                        // setTotalEventListCount(totalCount);
                    }
                }
            //  if(body.loadMore) setListInfo([...listInfo, ...res.data.listInfo]);
            //  else setListInfo(res.data.listInfo)
               })
          .catch(err => alert("글을 가져오는데 실패 했습니다."))
    }

    const loadImage = useCallback(async ({ query, page }) => {
        let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
        try {
          setLoading(true);
        //   const data = await UnsplashAPI()
          
        //   UnsplashAPI.searchPhotos({ 
        //     //   query, page, 
        //     //   per_page: PER_PAGE
        // });
        // console.log('res',data)
        //   totalPage.current = data.total_pages;
        //   return data;
        } catch(e) {
          setError(e);
        } finally {
          setLoading(false);
        }
    }, []);
    
    const searchImage = useCallback(async () => {
        console.log('TEST')
        await loadRandomImage();
        currentPage.current = 1;
        const data = await loadImage({ page: 1  });
        //   setImages(data.data.result);
    }, [loadImage, loadRandomImage]);
    console.log('FINAL',images)
    
    const loadMoreImage = useCallback(async () => {
      if(images.length > 0) {
        currentPage.current++;
        const data = await loadImage({
        //   page: currentQuery.current,
        //   page: currentPage.current
        });
        setImages([...images, ...data.results])
      }
    },[images, loadImage]);

    useIntersectionObserver({
        root: rootRef.current,
        target: targetRef.current,
        onIntersect: ([{isIntersecting}]) => {
          if(
            isIntersecting &&
            !loading &&
            currentPage.current < totalPage.current
          ) {
            loadMoreImage();
          }
        }
      });
    return (
        <div ref={rootRef}>
            <div ref={targetRef} />
        </div>
    //   <List ref={infiniteRef}>
    //     {items.map((item) => (
    //       <ListItem key={item.key}>{item.value}</ListItem>
    //     ))}
    //     {loading && <ListItem>Loading...</ListItem>}
    //   </List>
    );
  }



// const ListView= () => {

//   const getData = (body) => {
//     let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
//     axios.get("http://52.78.173.151/boards", {
//       "x-api-key": key,
//       }, body)
//       .then( res => {
//         //  if(body.loadMore) setListInfo([...listInfo, ...res.data.listInfo]);
//         //  else setListInfo(res.data.listInfo)
//            })
//       .catch(err => alert("글을 가져오는데 실패 했습니다."))
//   }

//   getData();
//     return (
//       <div>
//         <h2>TITLE</h2>
//         <Card></Card>
//       </div>
//     )
// }

export default ListView;


