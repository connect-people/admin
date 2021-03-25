import React from "react";
import MainItem from "./MainItem";

const MainList = ({ list }) => (
  <ul id="list">
    {list.map((item, i) => (
      <MainItem {...item} key={`item_${i}`} item={item}/>
    ))}
  </ul>
);

export default MainList;
