import React, {useState, useEffect} from 'react'
import PAGECONST from './utils/Constants';
import styles from './utils/Main.module.scss'
import MainList from './MainList';
import { getData } from './utils/util';
import FetchMore from '../../stores/FetchMore';

const MainListContainer = () => { 
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    params: {
        page: 1,
        pageCount: PAGECONST.count,
        totalCount: 0
    }
  })
  useEffect(async () => {
    setLoading(true);
    const list = await getData(page).then(response=>{
      setPayload({
        params: {
          page: response.data.paging.page,
          pageCount: response.data.paging.count,
          totalCount: response.data.paging.totalCount,
        }
      })
      return response.data.data;
    })
    if(page === 1){
      setList((prev) => [...prev, ...list]);
    }
    if(page !== 1 && Math.ceil(payload.params.totalCount / payload.params.pageCount) > payload.params.page){
        setList((prev) => [...prev, ...list]);
    }
    
    setLoading(false);
  }, [page]);
  return (
    <div id={styles.container} className={page === 0 && loading ? "loading" : ""}>
      <MainList list={list} />
      <FetchMore loading={page !== 0 && loading} setPage={setPage}/>
    </div>
  );
}

export default MainListContainer;


