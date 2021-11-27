import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Home Page Section
import HomePageWeb from './components/homepage/HomePageWeb.js'
import ProductDetails from './components/productdetails/ProductDetails';
import MyCartPage from './components/mycartpage/MyCartPage';
import KitchenAccessoriesDetails from './components/categorydetailspage/kitchenaccessories/KitchenAccessoriesDetails';
import MobileAccessories from './components/categorydetailspage/mobileaccessories/MobileAccessories';
import MensFashion from './components/categorydetailspage/mensfashion/MensFashion';
import WomensFashion from './components/categorydetailspage/womensfashion/WomensFashion';
import HomeAndLiving from './components/categorydetailspage/homeandliving/HomeAndLiving';
import BabyZone from './components/categorydetailspage/babyzone/BabyZone';
import SmartWatch from './components/categorydetailspage/smartwatch/SmartWatch';
import Accessories from './components/categorydetailspage/accessories/Accessories';
import CongratulationPage from './components/mycartpage/congratulationpage/CongratulationPage';
import Profile from './components/profilepage/Profile';
import MyAccountSettings from './components/profilepage/accountsetting/MyAccountSettings';

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
          <Route path="/congratulations" component={CongratulationPage}/>
          {/* My Cart  */}

          {/* Profile  */}
          <Route path="/my-profile" component={Profile}/>
          <Route path="/my-account-settings" component={MyAccountSettings}/>
          {/* Profile  */}

          {/* Category Details Pages  */}
          <Route path="/kitchen-accessories" component={KitchenAccessoriesDetails}/>
          <Route path="/mens-fashion" component={MensFashion}/>
          <Route path="/womens-fashion" component={WomensFashion}/>
          <Route path="/home-and-living" component={HomeAndLiving}/>
          <Route path="/baby-zone" component={BabyZone}/>
          <Route path="/smart-watches" component={SmartWatch}/>
          <Route path="/accessories" component={Accessories}/>
          <Route path="/mobile-accessories" component={MobileAccessories}/>
          {/* Category Details Page  */}

        </Switch>
        
      </div>
      </>
  );
}

export default App;
