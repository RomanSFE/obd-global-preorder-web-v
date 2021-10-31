import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Home Page Section
import HomePageWeb from './components/homepage/HomePageWeb.js'
import ProductDetails from './components/productdetails/ProductDetails';
import MyCartPage from './components/mycartpage/MyCartPage';

function App() {
  return (
    <>
      <div className="orpon-bd-web-version-main-section-box">

        <Switch>
          <Route exact path="/" component={HomePageWeb}/>

          {/* Products Details  */}
          <Route path="/products-details" component={ProductDetails}/>
          {/* Products Details  */}

          {/* My Cart  */}
          <Route path="/my-cart" component={MyCartPage}/>
          {/* My Cart  */}

        </Switch>
        
      </div>
      </>
  );
}

export default App;
