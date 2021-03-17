import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Infinite from './Infinite'

const InfiniteLanding= () => {

  const [listInfo, setListInfo] = useState([]);
  const [skip, setSkip] = useState(0);
  const [count, setcount] = useState(10);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {

    const body = {
      skip: skip,
      count: count,
    };
    getData(body)
    }, [])

  const getData = (body) => {
    let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
    axios.get("http://52.78.173.151/boards", {
      "x-api-key": key,
      }, body)
      .then( res => {
         if(body.loadMore) setListInfo([...listInfo, ...res.data.listInfo]);
         else setListInfo(res.data.listInfo)
           })
      .catch(err => alert("글을 가져오는데 실패 했습니다."))
  }
  
  const fetchMoreData = () => {
    setFetching(true);
    let tmpSkip = skip + count
    let body = {
      skip: tmpSkip,
            count: count,
            loadMore: true
        };

        getData(body);
        setSkip(tmpSkip);
        setFetching(false);
    }


    return (
      <div>
        <h2>TITLE</h2>
        <Infinite posts={listInfo} fetchMoreData={fetchMoreData} fetching={fetching}/>
      </div>
    )
}

export default InfiniteLanding