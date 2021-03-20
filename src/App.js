import React, { useState } from 'react';
import {Route, BrowserRouter, Switch as Router } from "react-router-dom"
import './styles/style.scss';
import MainContainer from "./page/main/MainContainer"
import NoticeListContainer from "./page/boradNotice/NoticeListContainer"
import NoticeDescContainer from "./page/boradNotice/NoticeDescContainer"
function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={MainContainer} />
        <Route path="/main" component={MainContainer} />
        <Route path="/notice/list" component={NoticeListContainer} />
        <Route path="/notice/desc" component={NoticeDescContainer} />
    </BrowserRouter>
  );
}

export default App;
