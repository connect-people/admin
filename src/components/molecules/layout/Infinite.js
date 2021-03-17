import React, {useEffect, useState} from 'react'
import Card from './Card'

const Infinite = ({posts, fetching, fetchMoreData}) => {

  const [postInfo, setPostInfo] = useState([]);

  useEffect(() => {
    setPostInfo(posts);
  }, [posts])
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight >= scrollHeight && fetching === false) {
  fetchMoreData();
  }
    }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
      return () => {window.removeEventListener('scroll', handleScroll)
}
  })
    return (
      <div>
        { postInfo && postInfo.map((post, idx) => (
           <Card key={idx} listInfo={post} />
        ))}
      </div>
  )
}

export default Infinite