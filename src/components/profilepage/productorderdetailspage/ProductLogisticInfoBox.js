import React, { Component } from 'react'
import './productdetailspage.css'

export default class ProductLogisticInfoBox extends Component {
    render() {
        return (
            <>
            {/* Logistic Info Details Color Part Start */}
            <div className="product-order-details-box-profile-section-right-main-box">
                {/* Color Box */}
                <div className="product-logistics-details-bx-section-content-color-txtt">
                    <h4>Logistics Information</h4>
                    <div className="product-logistics-details-bx-section-brdrrad"></div>
                </div>
                {/* Color Box ----*/}

                {/* Logistic Info Table Box Start ----- */}
                <div className="obd-all-preorders-order-bx-product-profile-pgg-table-box">
                    <table className="table table-bordered">
                        <thead style={{borderRadius: '8px'}}>
                            <tr>
                                <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px', textAlign: "center"}} scope="col col-6">Shipping Company</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Tracking Number</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Delivery Time</th>
                                <th scope="col col-6" style={{textAlign: 'center'}}>Shipping From</th>
                                <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'left', width: '30%'}} scope="col col-6">Tracking Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* single Item start */}
                            <tr>
                                <td style={{textAlign: 'center'}}>
                                    Drop BD
                                </td>
                                <td style={{textAlign: 'center'}}>
                                    #215478
                                </td>
                                <td style={{textAlign: 'center'}}>
                                    2-3 Days
                                </td>
                                <td style={{textAlign: 'center'}}>
                                    Chaina
                                </td>
                                <td style={{textAlign: 'left'}}>
                                Full Delivery information here,  Full Delivery information
                                Full Delivery information here, 
                                </td>
                            </tr>
                            {/* Single Item End */}

                        </tbody>
                    </table>
                </div>
                {/* Logistic Table Box End ------ */}

            </div>
            {/* Logistic Details Color Part End */}
            </>
        )
    }
}
