import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './productdetailspage.css'

export default class ProductDetailsBox extends Component {
    render() {
        return (
            <>
            {/* Product Details Color Part Start */}
            <div className="product-order-details-box-profile-section-right-main-box">
                {/* Color Box */}
                <div className="product-order-details-bx-section-content-color-txtt">
                    <h4>Product Details</h4>
                    <div className="product-order-details-bx-section-brdrrad"></div>
                </div>
                {/* Color Box ----*/}
                {/* Table Box Start ----- */}
                <div className="obd-all-preorders-order-bx-product-profile-pgg-table-box">
                    <table className="table table-bordered">
                        <thead style={{borderRadius: '8px'}}>
                            <tr>
                                <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',width: '24%'}} scope="col col-6">Product</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Date</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Price Per Unit</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Quantity</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Total Amount</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Payment Method</th>
                                <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'center'}} scope="col col-6">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* single Item start */}
                            <tr>
                                <td>
                                    <div className="obd-preorder-bx-product-pro-pg-img-part">
                                        <div className="row obd-preorder-bx-product-pro-pg-img-ex-pd">
                                            <div className="col-md-3">
                                                <div className="obd-preorder-bx-product-pro-pg-img-sec">
                                                    <img src={require('../../../assets/women-fas-cat-4.png')} alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="obd-preorder-bx-product-pro-pg-img-contnt">
                                                    <Link to="/">
                                                        Product Title Maximum Two Lines..
                                                    </Link>
                                                    <div className="obd-preorder-bx-product-pro-pg-img-contnt-txt">
                                                        <p>Color: <span>Blue</span></p>
                                                        <p>Size: <span>L</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{textAlign: 'center'}}>2 Sep, 2020 <br/> <span>3:00 PM</span></td>
                                <td style={{textAlign: 'center'}}>1250 TK</td>
                                <td style={{textAlign: 'center'}}>3</td>
                                <td style={{textAlign: 'center'}}>3750 TK</td>
                                <td style={{textAlign: 'center'}}>Bkash</td>
                                <td style={{textAlign: 'center'}}>
                                    <div className="obd-preorder-bx-product-pro-pg-and-payment-stts-sec">
                                        <div className="obd-recent-order-bx-product-and-payment-stts-pendng">
                                            <button>Pending</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {/* Single Item End */}

                        </tbody>
                    </table>
                </div>
            </div>
            {/* Product Details Color Part End */}
            </>
        )
    }
}
