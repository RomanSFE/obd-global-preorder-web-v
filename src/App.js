import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Home Page Section
import HomePageWeb from './components/homepage/HomePageWeb.js'

function App() {
  return (
    <>
      <div className="orpon-bd-web-version-main-section-box">

        <Switch>
          <Route exact path="/" component={HomePageWeb}/>

          {/* Pre Order Details  */}
          {/* <Route path="/pre-order-details" component={PreOrderDetails}/> */}
          {/* Pre Order Details  */}

        </Switch>
        
      </div>
      </>
  );
}

export default App;
