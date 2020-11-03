import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import React from 'react';
import Navbar from "./component/Navbar"
import Homepage from "./pages/Homepage/Homepage"
import Login from "./pages/Login/Login"
import MyWaste from "./pages/MyWaste/MyWaste"
import WhatDoIHave from "./pages/WhatDoIHave/WhatDoIHave"



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/homepage" component={Homepage}/>
          <Route exact path="/WhatDoIHave" component={WhatDoIHave} />
          <Route exact path="/MyWaste" component={MyWaste}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="" />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
