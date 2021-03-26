import React from "react";
import MainItem from "./MainItem";
import styles from "./utils/List.module.scss";

const MainList = ({ list, isLast }) => (
  <ul id="list" className={styles.list_card}>
    {list.map((item, i) => (
      <MainItem {...item} key={`item_${i}`} item={item}/>
      // <Card {...item} key={`item_${i}`} item={item}/>
    ))}
    
  </ul>
);

export default MainList;
