import React, { useRef, useEffect } from "react";
import styles from '../page/main/utils/Main.module.scss'

const FetchMore = ({ loading, setPage }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if(isIntersecting) setPage(page => page + 1);
  });
  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    // return () => {
    //   fetchMoreObserver.unobserve(fetchMoreTrigger.current);
    // };
  }, []);

  return (
    <div
      id={styles.fetchMore}
      className={loading ? "loading" : ""}
      ref={fetchMoreTrigger}
    />
  );
};

export default FetchMore;
