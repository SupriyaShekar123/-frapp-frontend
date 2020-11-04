import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import React from 'react';
import Navbar from "./component/Navbar"
import Homepage from "./pages/Homepage/Homepage"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import MyWaste from "./pages/MyWaste/MyWaste"
import WhatDoIHave from "./pages/WhatDoIHave/WhatDoIHave"
import DetailsFridge from "./pages/DetailsPage/DetailsFridge"
import AddItemButton from "./component/AddItemButton"
import DetailsPantry from './pages/DetailsPage/DetailsPantry';

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
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/Itemsinfridge" component={DetailsFridge}/>
          <Route exact path="/Itemsinspantry" component={DetailsPantry}/>

          <Route exact path="/AddItemButton" component={AddItemButton}/>
        </Switch>
        {/* <DetailsFridge/> */}
<<<<<<< HEAD
        {/* <DetailsPantry/> */}
=======
>>>>>>> setup for items reducer, with action to fetch items from the server
      </div>
    </Router>
    
  );
}

export default App;
