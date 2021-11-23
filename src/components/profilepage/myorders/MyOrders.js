import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MoreToLoveAllProducts from '../../allsections/moretoloveallproducts/MoreToLoveAllProducts'
import TopBarMenu from '../../allsections/topbarsection/TopBarMenu'
import UserProfileDashSidebar from '../userprofiledashsidebar/UserProfileDashSidebar'
import './myorders.css'


export default class MyOrders extends Component {
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
                           <div className="obd-my-orders-section-main-profile-section-right-main-box">
                                {/* My Order Color */}
                                <div className="my-orderx-wv-orderzx-section-content-color-txtt">
                                    <h4>My Orders <span>(Your order history in ORPON BD Global)</span></h4>
                                    <div className="my-orderxc-wv-shoppingcart-order-summary-section-brdrr"></div>
                                </div>
                                {/* My Order Color  end ------- */}

                                {/* Search Box start */}
                                <div className="my-orderx-wv-orderzx-section-content-search-and-select-box">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="my-orderx-wv-orderzx-section-content-search-sec">
                                                <input type="search" placeholder="Search..."/>
                                                <span><button type="submit"><i className="fas fa-search"></i></button></span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="my-orderx-wv-orderzx-section-content-select-sxc text-right">
                                                <select>
                                                    <option value="">All Orders</option>
                                                    <option value="">Pending</option>
                                                    <option value="">Delivered</option>
                                                    <option value="">Cancelled</option>
                                                    <option value="">In Transit</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Search Box end ------------------ */}

                                {/* All Order Table Box start */}
                                <div className="my-orderx-wv-orderzx-section-content-all-order-table-box">
                                    <table className="table table-bordered" style={{borderTopLeftRadius: '8px',border: 'none'}}>
                                        <thead style={{borderTopLeftRadius: '8px',border: 'none'}}>
                                            <tr style={{borderTopLeftRadius: '8px',border: 'none'}}>
                                                <th scope="col col-6" style={{borderTopLeftRadius: '8px',border: 'none'}}>Order ID</th>
                                                <th scope="col col-6">Order Date</th>
                                                <th scope="col col-6">Amount</th>
                                                <th scope="col col-6">Payment</th>
                                                <th scope="col col-6">Status</th>
                                                <th scope="col col-6" style={{borderTopRightRadius: '8px',border: 'none'}}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* single Item start */}
                                            <tr>
                                                <td>
                                                    <div className="obd-my-orderx-wv-orderzx-section-idd-lnk">
                                                        <Link to="/my-order-details">#252545524</Link>
                                                    </div>
                                                </td>
                                                <td>2 Sep, 2020  | <span>3:00 PM</span></td>
                                                <td>৳ 1500</td>
                                                <td>Cash On Delivery</td>
                                                <td>
                                                    <div className="my-orderx-wv-orderzx-listttx-lxst">
                                                        <button className="my-orderx-wv-orderzx-pending" type="submit">Pending</button>
                                                    </div>
                                                </td>
                                                <td>
                                                <div className="merchant-lizzxst-action-edit-sec">
                                                    <Link to="/my-order-details">View <span><i className="fas fa-eye"></i></span></Link>
                                                </div>
                                                </td>
                                            </tr>
                                            {/* Single Item End */}
                                            {/* single Item start */}
                                            <tr>
                                                <td>
                                                    <div className="obd-my-orderx-wv-orderzx-section-idd-lnk">
                                                        <Link to="/my-order-details">#252545524</Link>
                                                    </div>
                                                </td>
                                                <td>2 Sep, 2020  | <span>3:00 PM</span></td>
                                                <td>৳ 1500</td>
                                                <td>Nagad</td>
                                                <td>
                                                    <div className="my-orderx-wv-orderzx-listttx-lxst">
                                                        <button className="my-orderx-wv-orderzx-intranst" type="submit">In Transit</button>
                                                    </div>
                                                </td>
                                                <td>
                                                <div className="merchant-lizzxst-action-edit-sec">
                                                    <Link to="/my-order-details">View <span><i className="fas fa-eye"></i></span></Link>
                                                </div>
                                                </td>
                                            </tr>
                                            {/* Single Item End */}
                                            {/* single Item start */}
                                            <tr>
                                                <td>
                                                    <div className="obd-my-orderx-wv-orderzx-section-idd-lnk">
                                                        <Link to="/my-order-details">#252545524</Link>
                                                    </div>
                                                </td>
                                                <td>2 Sep, 2020  | <span>3:00 PM</span></td>
                                                <td>৳ 1500</td>
                                                <td>Cash On Delivery</td>
                                                <td>
                                                    <div className="my-orderx-wv-orderzx-listttx-lxst">
                                                        <button className="my-orderx-wv-orderzx-on-hold" type="submit">On Hold</button>
                                                    </div>
                                                </td>
                                                <td>
                                                <div className="merchant-lizzxst-action-edit-sec">
                                                    <Link to="/my-order-details">View <span><i className="fas fa-eye"></i></span></Link>
                                                </div>
                                                </td>
                                            </tr>
                                            {/* Single Item End */}
                                            {/* single Item start */}
                                            <tr>
                                                <td>
                                                    <div className="obd-my-orderx-wv-orderzx-section-idd-lnk">
                                                        <Link to="/my-order-details">#252545524</Link>
                                                    </div>
                                                </td>
                                                <td>2 Sep, 2020  | <span>3:00 PM</span></td>
                                                <td>৳ 1500</td>
                                                <td>Bkash</td>
                                                <td>
                                                    <div className="my-orderx-wv-orderzx-listttx-lxst">
                                                        <button className="my-orderx-wv-orderzx-cancelled" type="submit">Canceled</button>
                                                    </div>
                                                </td>
                                                <td>
                                                <div className="merchant-lizzxst-action-edit-sec">
                                                    <Link to="/my-order-details">View <span><i className="fas fa-eye"></i></span></Link>
                                                </div>
                                                </td>
                                            </tr>
                                            {/* Single Item End */}
                                            {/* single Item start */}
                                            <tr>
                                                <td>
                                                    <div className="obd-my-orderx-wv-orderzx-section-idd-lnk">
                                                        <Link to="/my-order-details">#252545524</Link>
                                                    </div>
                                                </td>
                                                <td>2 Sep, 2020  | <span>3:00 PM</span></td>
                                                <td>৳ 1500</td>
                                                <td>Cash On Delivery</td>
                                                <td>
                                                    <div className="my-orderx-wv-orderzx-listttx-lxst">
                                                        <button className="my-orderx-wv-orderzx-deliverd" type="submit">Delivered</button>
                                                    </div>
                                                </td>
                                                <td>
                                                <div className="merchant-lizzxst-action-edit-sec">
                                                    <Link to="/my-order-details">View <span><i className="fas fa-eye"></i></span></Link>
                                                </div>
                                                </td>
                                            </tr>
                                            {/* Single Item End */}

                                        </tbody>
                                    </table>
                                    {/* Pagination Start */}
                                    <div className="row obd-bd-web-v-dashboarrd-support-ticket-pagination-section text-right">
                                        <div className="col-md-12">
                                            <div className="orpon-bd-web-v-dashboarrd-mang-rev-pagination-section-box">
                                                <div className="orpon-bd-web-v-dashboarrd-mang-rev-pagination-section-content">
                                                    <ul>
                                                        <li className="orpon-bbd-dashboarrd-mang-rev-pagination-prevv-txt-webv"><Link to="/"><span><i className="fas fa-angle-left"></i></span></Link></li>
                                                        <li><Link to="/">1</Link></li>
                                                        <li><Link to="/">2</Link></li>
                                                        <li><Link to="/">3</Link></li>
                                                        <li><Link to="/">4</Link></li>
                                                        <li><Link to="/">5</Link></li>
                                                        <li><Link to="/">6</Link></li>
                                                        <li className="orpon-dashboarrd-mang-rev-pagination-nextt-txt-webv"><Link to="/"> <span><i className="fas fa-angle-right"></i></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Pagination End */}
                                </div>
                                {/* All Order Table Box End */}
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
