import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './productdetailspage.css'

export default class ProductFinancialBox extends Component {
    render() {
        return (
            <>
            {/* Financial Details Color Part Start */}
            <div className="product-order-details-box-profile-section-right-main-box">
                {/* Color Box */}
                <div className="product-financial-details-bx-section-content-color-txtt">
                    <h4>Financial</h4>
                    <div className="product-financial-details-bx-section-brdrrad"></div>
                </div>
                {/* Color Box ----*/}

                {/* Total Amount Table Box Start ----- */}
                <div className="obd-all-preorders-order-bx-product-profile-pgg-table-top-bx">
                    <h4>Total Amount</h4>
                </div>
                <div className="obd-all-preorders-order-bx-product-profile-pgg-table-box">
                    <table className="table table-bordered">
                        <thead style={{borderRadius: '8px'}}>
                            <tr>
                                <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px', textAlign: "center"}} scope="col col-6">Price</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Shipping Cost</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Adjust Price</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Discount</th>
                                <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'center'}} scope="col col-6">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* single Item start */}
                            <tr>
                                <td style={{textAlign: 'center'}}>
                                    1220 TK
                                </td>
                                <td style={{textAlign: 'center'}}>
                                    60 TK
                                </td>
                                <td style={{textAlign: 'center'}}>
                                    0.00 TK
                                </td>
                                <td style={{textAlign: 'center'}}>
                                    0.00 TK
                                </td>
                                <td style={{textAlign: 'center'}}>
                                    1280 TK
                                </td>
                            </tr>
                            {/* Single Item End */}

                        </tbody>
                    </table>
                </div>
                {/* Total Amount Table Box End ------ */}

                {/* Payment Receive Table Box Start ----- */}
                <div className="obd-all-preorders-order-bx-product-profile-pgg-table-top-bx">
                    <h4>Payment Received</h4>
                </div>
                <div className="obd-all-preorders-order-bx-product-profile-pgg-table-box">
                    <table className="table table-bordered">
                        <thead style={{borderRadius: '8px'}}>
                            <tr>
                                <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px', textAlign: "center"}} scope="col col-6">Total</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Received</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Payment Method</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Transaction Id</th>
                                <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'center'}} scope="col col-6">Received Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* single Item start */}
                            <tr>
                                <td style={{textAlign: 'center'}}>
                                    1280 TK
                                </td>
                                <td style={{textAlign: 'center'}}>
                                    1280 TK
                                </td>
                                <td style={{textAlign: 'center'}}>
                                    Bkash
                                </td>
                                <td style={{textAlign: 'center'}}>
                                    #2154874
                                </td>
                                <td style={{textAlign: 'center'}}>
                                    2 Sep, 2020 <br/> <span>3:00 PM </span>
                                </td>
                            </tr>
                            {/* Single Item End */}

                        </tbody>
                    </table>
                </div>
                {/* Payment Receive Table Box End ------ */}

                {/* Refund Table Box Start ----- */}
                <div className="obd-all-preorders-order-bx-product-profile-pgg-table-top-bx">
                    <h4>Refund Information</h4>
                </div>
                <div className="obd-all-preorders-order-bx-product-profile-pgg-table-box">
                    <table className="table table-bordered">
                        <thead style={{borderRadius: '8px'}}>
                            <tr>
                                <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',width: '40%'}} scope="col col-6">Product</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Refund Amount</th>
                                <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'center'}} scope="col col-6">Refund Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* single Item start */}
                            <tr>
                                <td>
                                    <div className="obd-preorder-bx-product-pro-pg-img-part">
                                        <div className="row obd-preorder-bx-product-pro-pg-img-ex-pd">
                                            <div className="col-md-2">
                                                <div className="obd-preorder-bx-product-pro-pg-img-sec">
                                                    <img src={require('../../../assets/women-fas-cat-4.png')} alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-10">
                                                <div className="obd-preorder-bx-product-pro-pg-img-contnt">
                                                    <Link to="/">
                                                        Product Title Maximum Two Lines, Maximum Two Lines..
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
                                <td style={{textAlign: 'center'}}>
                                    <div className="obd-preorder-bx-product-pro-pg-and-payment-stts-sec">
                                        <div className="obd-preorder-bx-product-pro-pg-and-payment-stts-cancelld">
                                            <button>Cancelled</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {/* Single Item End */}

                        </tbody>
                    </table>
                </div>
                {/* Refund Table Box End ------ */}

            </div>
            {/* Financial Details Color Part End */}
            </>
        )
    }
}
