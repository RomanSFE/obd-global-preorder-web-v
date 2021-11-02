import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './congratulationpage.css';

import TopBarMenu from '../../allsections/topbarsection/TopBarMenu';
import MoreToLoveAllProducts from '../../allsections/moretoloveallproducts/MoreToLoveAllProducts';

export default class CongratulationPage extends Component {

    render() {
        return (
            <>
            <div className="obd-preorder-page-web-top-menu">
                <TopBarMenu/>
            </div>

            <div className="my-cart-preorder-g-congratulation-main-sec-wv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="my-cart-preorder-g-congratulation-main-bx">
                                <div className="my-cart-preorder-g-congrz-bx-txt text-center">
                                    <h3>Congratulations !</h3>
                                    <p>
                                        You have successfully place an order to Orpon BD <br/>
                                        Thank you for ordering in our shop. You will receive a confirmation e-mail shortly.
                                    </p>
                                </div>
                                <div className="my-cart-preorder-g-congrz-bx-banner-img text-center">
                                    <img src={require('../../../assets/cart-page-congratulation-page.png')} alt="orponbd online shop"/>
                                </div>
                                <div className="my-cart-preorder-g-congrz-bx-shop-btn text-center">
                                    <Link to="/">Continue Shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products Start */}
            <div className="obd-pre-order-product-details-related-products-bx">
                <div className="obd-pre-order-product-details-related-bx">
                    <MoreToLoveAllProducts/>
                </div>
            </div>
            {/* Related Products End */}
            </>
        )
    }
}
