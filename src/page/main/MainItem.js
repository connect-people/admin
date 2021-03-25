import React from 'react';
import {Link} from 'react-router-dom'

const MainItem = ({ item }) => (
  <li>
    <a>
      <div className="no">{item.brandName}</div>
      <div className="content">
        <div className="_id"></div>
        <div className="text"></div>
      </div>
    </a>
  </li>
);

export default MainItem;
