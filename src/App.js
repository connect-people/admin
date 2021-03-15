import React, { useState } from 'react';
import {Route, BrowserRouter, Switch as Router } from "react-router-dom"
import MainContainer from "./page/main/MainContainer.js"
function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={MainContainer} />
        <Route path="/main" component={MainContainer} />
    </BrowserRouter>
  );
}

export default App;
