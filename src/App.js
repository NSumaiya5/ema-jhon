import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import Notmatch from './component/Notmatch/Notmatch';
import Productkey from './component/Productkey/Productkey';


function App() {
  return (
    <div>
       <Header></Header>
   <Router>
     <Switch>
       <Route path="/shop">
       <Shop></Shop>
       </Route>
       <Route path="/review">
        <Review></Review>
        </Route>
        <Route path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route exact path="/">
       6   <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <Productkey></Productkey>
          </Route>
        <Route path="*">
          <Notmatch></Notmatch>
        </Route>
     </Switch>
   </Router>
        
       
         
    </div>
  );
}

export default App;
