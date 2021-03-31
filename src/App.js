import React from 'react';
import {Route, BrowserRouter, Switch as Router } from "react-router-dom"
import './styles/style.scss';
import MainListContainer from "./page/main/MainListContainer"
import MainDescContainer from "./page/main/MainDescContainer"
import NoticeListContainer from "./page/boradNotice/NoticeListContainer"
import NoticeDescContainer from "./page/boradNotice/NoticeDescContainer"
import NoticeWriteContainer from "./page/boradNotice/NoticeWriteContainer"
function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route exact path="/" component={MainListContainer} />
        <Route path="/main/list" component={MainListContainer} />
        <Route path="/main/desc/:boardCode" component={MainDescContainer} />
        <Route path="/notice/list" component={NoticeListContainer} />
        <Route path="/notice/desc/:id" component={NoticeDescContainer} />
        <Route path="/notice/write/ZZzMbZjpPrg" component={NoticeWriteContainer} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
