import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MoreToLoveAllProducts from '../allsections/moretoloveallproducts/MoreToLoveAllProducts';
import TopBarMenu from '../allsections/topbarsection/TopBarMenu';
import UserProfileDashSidebar from './userprofiledashsidebar/UserProfileDashSidebar';
import './profile.css';

class Profile extends Component {
    render() {
        return (
            <>
            <div className="obd-preorder-page-web-top-menu">
                <TopBarMenu/>
            </div>

            {/* Product Details Section Start */}
            <div className="obd-pre-order-product-details-main-sec">
              <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <UserProfileDashSidebar/>
                    </div>

                  <div className="col-md-10">
                    <div className="obd-pre-order-product-details-bg-bx-wrap">

                      {/* Profile Image Box start */}
                      <div className="obd-pre-order-details-profile-acc-info-box">
                        <div className="row obd-pre-order-details-profile-acc-excd-pdd">
                            <div className="col-md-2">
                                <div className="obd-pre-order-d-profile-acc-img text-center">
                                    <img src={require('../../assets/user-profile-wv-pic.png')} alt="orponbd preorder"/>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="obd-pre-order-d-profile-acc-prf-nm-cnnt">
                                    <h4>Abdulla Al Roman</h4>
                                    <p><span><i className="fas fa-phone-alt"></i></span> 01748965748</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Profile Image Box end */}

                    {/* Profile All Order Main Box start*/}
                    <div className="obd-preorder-profile-accnt-allz-main-bbox">
                      <div className="row obd-preorder-profile-accnt-allz-ex-pdz">
                          <div className="col-md-12">
                              <div className="obd-preorder-profile-accnt-allz-content-boxx">
                                  <div className="obd-preorder-profile-accnt-allz-content-hed">
                                      <h4>My Orders</h4>
                                  </div>
                                  {/* All Order Start */}
                                  <div className="obd-preorder-profile-accnt-allz-tbl-ordr-main-box">
                                      {/* Table Box start */}
                                      <div className="obd-preorder-profile-accnt-allz-wv-table-box">
                                          <table className="table table-bordered">
                                              <thead style={{borderRadius: '8px'}}>
                                                  <tr>
                                                      <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px', width: '55%'}} scope="col col-6">Product Name</th>
                                                      <th style={{textAlignLast: 'center'}} scope="col col-6">Quantity</th>
                                                      <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'center'}} scope="col col-6">Price</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  {/* single Item start */}
                                                  <tr>
                                                      <td>
                                                          <div className="obd-preorder-profile-accnt-allz-img-txt-main">
                                                              <div className="row obd-preorder-profile-accnt-allz-ttbl-eex-ppd">
                                                                  <div className="col-md-2">
                                                                      <div className="obd-preorder-profile-accnt-snglz-img-prd">
                                                                          <img src={require('../../assets/more-all-products-1.png')} alt=""/>
                                                                      </div>
                                                                  </div>
                                                                  <div className="col-md-10">
                                                                      <div className="obd-preorder-profile-accnt-snglz-img-prd-txxt">
                                                                          <Link to="/">Product Name In Two Line mazimum, Two Line Max Two Line Max Two Line Max...</Link>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td style={{textAlign: 'center'}}>
                                                          2
                                                      </td>
                                                      
                                                      <td style={{textAlign: 'center'}}>
                                                          <div className="obd-preorder-profile-accnt-snglz-prd-prc">
                                                              <h4><span>৳</span> 500</h4>
                                                          </div>
                                                      </td>
                                                  </tr>
                                                  {/* Single Item End */}

                                                  {/* single Item start */}
                                                  <tr>
                                                      <td>
                                                          <div className="obd-preorder-profile-accnt-allz-img-txt-main">
                                                              <div className="row obd-preorder-profile-accnt-allz-ttbl-eex-ppd">
                                                                  <div className="col-md-2">
                                                                      <div className="obd-preorder-profile-accnt-snglz-img-prd">
                                                                          <img src={require('../../assets/more-all-products-3.png')} alt=""/>
                                                                      </div>
                                                                  </div>
                                                                  <div className="col-md-10">
                                                                      <div className="obd-preorder-profile-accnt-snglz-img-prd-txxt">
                                                                          <Link to="/">Product Name In Two Line mazimum, Two Line Max Two Line Max Two Line Max...</Link>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td style={{textAlign: 'center'}}>
                                                          5
                                                      </td>
                                                      
                                                      <td style={{textAlign: 'center'}}>
                                                          <div className="obd-preorder-profile-accnt-snglz-prd-prc">
                                                              <h4><span>৳</span> 2500</h4>
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
                                      {/* Table Box End */}
                                  </div>
                                  {/* All Order End */}

                                  {/* When Empty Order, This section show */}
                                  {/* <div className="obd-preorder-profile-accnt-content-o-empty-img text-center">
                                      <img src={require('../../assets/my-order-profile-empty-order.png')} alt="orponbd preorder"/>
                                      <div className="obd-preorder-profile-accnt-content-o-empty-img-txt text-center">
                                          <p>No Order Yet</p>
                                      </div>
                                  </div> */}
                                  {/* When Empty Order, This section show */}
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* Profile All Order Main Box end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Details Section End */}

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
export default Profile
