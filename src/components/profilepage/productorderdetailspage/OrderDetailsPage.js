import React, { Component } from 'react'
import TopBarMenu from '../../allsections/topbarsection/TopBarMenu'
import './productdetailspage.css'


import ProductDetailsBox from './ProductDetailsBox'
import ProductFinancialBox from './ProductFinancialBox'
import ProductLogisticInfoBox from './ProductLogisticInfoBox'
import UserProfileDashSidebar from '../userprofiledashsidebar/UserProfileDashSidebar';

export default class OrderDetailsPage extends Component {
    
    render() {
        return (
            <>
            <div className="obd-preorder-page-web-top-menu">
                <TopBarMenu/>
            </div>

           <div className="obd-profile-account-section-main-profile-section">
               <div className="container">
                   <div className="row">
                        <div className="col-md-2">
                            <UserProfileDashSidebar/>
                        </div>
                       <div className="col-md-10">
                           {/* Top Product Order Details Color Part Start */}
                            <div className="product-order-details-profile-section-right-main-box">
                                {/* Color Box */}
                                <div className="product-order-details-section-content-color-txtt">
                                    <h4>Order Details</h4>
                                    <div className="product-order-details-section-brdrrad"></div>
                                </div>
                                {/* Color Box */}
                           </div>
                           {/* Top Order Details Color Part End ------------------- */}

                           {/* Order Number and Customer Details Start */}
                           <div className="obd-order-d-id-and-customet-det-main-right-box">
                               <div className="row obd-order-d-id-and-customet-det-ex-pdd">
                                   <div className="col-md-6">
                                       <div className="obd-order-d-id-and-customet-det-left-det-box">
                                           {/* single item start */}
                                           <div className="obd-order-d-id-and-customet-det-left-det-box-inner">
                                                <h4>Order Number :</h4>
                                                <div className="obd-order-d-id-and-customet-det-left-det-box-ab">
                                                    <h3>#23547871</h3>
                                                </div>
                                           </div>
                                           {/* single item end */}
                                           {/* single item start */}
                                           <div className="obd-order-d-id-and-customet-det-left-det-box-inner">
                                                <h4>Status :</h4>
                                                <div className="obd-order-d-id-and-customet-det-left-det-box-ab">
                                                    <h4>Finished</h4>
                                                </div>
                                           </div>
                                           {/* single item end */}
                                           {/* single item start */}
                                           <div className="obd-order-d-id-and-customet-det-left-det-box-inner">
                                                <h4>Reminder :</h4>
                                                <div className="obd-order-d-id-and-customet-det-left-det-box-ab">
                                                    <p>
                                                        Your Order has been finished successfully, order
                                                        has been finished successfully.
                                                    </p>
                                                </div>
                                           </div>
                                           {/* single item end */}
                                           {/* single item start */}
                                           <div className="obd-order-d-id-and-customet-det-left-det-box-inner">
                                                <div className="obd-order-d-id-and-customet-det-left-det-box-ab">
                                                    <button type="submit">Add To Cart</button>
                                                </div>
                                           </div>
                                           {/* single item end */}
                                       </div>
                                   </div>
                                   <div className="col-md-6">
                                        <div className="obd-order-d-id-and-customet-det-left-det-box">
                                           {/* single item start */}
                                           <div className="obd-order-d-id-and-customet-det-left-det-box-inner">
                                                <h4>Customer Name :</h4>
                                                <div className="obd-order-d-id-and-customet-det-left-det-box-ab">
                                                    <h5>Customer Full Name</h5>
                                                </div>
                                           </div>
                                           {/* single item end */}
                                           {/* single item start */}
                                           <div className="obd-order-d-id-and-customet-det-left-det-box-inner">
                                                <h4>Mobile Number :</h4>
                                                <div className="obd-order-d-id-and-customet-det-left-det-box-ab">
                                                    <h5>01748596785</h5>
                                                </div>
                                           </div>
                                           {/* single item end */}
                                           {/* single item start */}
                                           <div className="obd-order-d-id-and-customet-det-left-det-box-inner">
                                                <h4>Address :</h4>
                                                <div className="obd-order-d-id-and-customet-det-left-det-box-ab">
                                                    <p>
                                                        Customer full Address Your Order has been finished
                                                        successfully, order has been finished successfully
                                                    </p>
                                                </div>
                                           </div>
                                           {/* single item end */}
                                       </div>
                                   </div>
                               </div>
                           </div>
                           {/* Order Number and Customer Details End */}

                           {/* Product Details Box Start */}
                           <ProductDetailsBox/>
                           {/* Product Details Box End */}

                           {/* Financial Details Box Start */}
                           <ProductFinancialBox/>
                           {/* Financial Details Box End */}

                           {/* Logistics Details Box Start */}
                           <ProductLogisticInfoBox/>
                           {/* Logistics Details Box End */}

                       </div>
                   </div>
               </div>
           </div>
            </>
        )
    }
}
