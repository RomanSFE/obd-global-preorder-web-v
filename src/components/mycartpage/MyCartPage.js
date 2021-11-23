import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MoreToLoveAllProducts from '../allsections/moretoloveallproducts/MoreToLoveAllProducts';
import TopBarMenu from '../allsections/topbarsection/TopBarMenu';
import './mycartpage.css';

class MyCartPage extends Component {
  state = {
    // For Increase Decrease
    value: 1,
    // For Increase Decrease
  };

  // Increace Decreace Section start --------------------------- 
  decrease = () => {
    this.setState({ value: this.state.value - 1 });
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  }
// Increace Decreace Section end -----------------

    render() {
        return (
            <>
            <div className="obd-preorder-page-web-top-menu">
                <TopBarMenu/>
            </div>

            {/* Product Details Section Start */}
            <div className="obd-pre-order-product-my-cart-page-main-sec">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="obd-pre-order-product-my-cart-bg-wrap-bx">
                      <div className="row obd-pre-order-product-my-cart-ex-pdd">
                        <div className="col-md-5">
                            <div className="obd-pre-order-my-cart-user-info-main-box">
                                <div className="obd-pre-order-my-cart-user-info-hed-txt">
                                  <h3>Account Details.</h3>
                                </div>
                                <div className="obd-pre-order-my-cart-user-info-form">
                                  <form action="">
                                    <div className="obd-preorder-mycart-user-form-input-field obd-otp-bx">
                                        <label htmlFor="phone">Mobile Number :</label>
                                        <input type="text" name="phone" placeholder="Enter your Mobile Number.."/>
                                        <span><button type="submit">Send Otp</button></span>
                                    </div>

                                    <div className="obd-preorder-mycart-user-form-input-field">
                                        <label htmlFor="name">Name :</label>
                                        <input type="text" name="name" placeholder="Enter your Name"/>
                                    </div>

                                    <div className="obd-preorder-mycart-user-form-input-field">
                                        <label htmlFor="">Full Address :</label>
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Address.."></textarea>
                                    </div>

                                    <div className="obd-preorder-mycart-user-form-input-field">
                                        <label htmlFor="">Select Area :</label>
                                        <select>
                                            <option value="" selected>--- Select Area ---</option>
                                            <option value="">Inside Dhaka</option>
                                            <option value="">Outside Dhaka</option>
                                        </select>
                                    </div>
                                    <div className="obd-preorder-mycart-user-form-input-field for-lnk-only">
                                        {/* <button type="submit">Confirm Order</button> */}
                                        <Link to="/congratulations">
                                            Confirm Order
                                        </Link>
                                    </div>
                                  </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="obd-pre-order-crt-product-item-list-main-bx">
                              {/* Shopping Cart color */}
                              <div className="my-cart-wv-shoppingcart-order-summary-section-content-color-txtt">
                                  <h4>Product Items</h4>
                                  <div className="my-cart-wv-shoppingcart-order-summary-ttxt">
                                      <span className="my-cart-wv-shoppingcart-order-sum-itm"><span><p><span>7</span> Items</p></span></span>
                                  </div>
                                  <div className="my-cart-wv-shoppingcart-order-summary-section-brdrr"></div>
                              </div>
                              {/* Shopping Cart color */}
                              {/* Shopping Cart Order Start ---------------------------Order*/}
                              <div className="my-cart-wv-shoppingcart-order-all-product-itemsx-main-bbox">

                                  <div className="my-cart-wv-shoppingcart-order-all-product-itemsx-prod-box">
                                      <table class="table table-borderedx">
                                          <thead>
                                              <tr>
                                                  <th scope="col col-6">Product Details</th>
                                                  <th className="text-center" scope="col col-6">Quantity</th>
                                                  <th className="text-center" scope="col col-6">Price</th>
                                              </tr>
                                          </thead>
                                          <tbody>

                                              {/* Single Item start */}
                                              <tr>
                                                  <td style={{width: '55%'}}>
                                                      <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-det">
                                                          <div className="row my-cart-wv-shoppingcart-order-all-product-sn-expdd">
                                                              <div className="col-md-3">
                                                                  <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-img">
                                                                      <img src={require('../../assets/cart-product-3.png')} alt="orponbd online shop"/>
                                                                  </div>
                                                              </div>
                                                              <div className="col-md-9">
                                                                  <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-content">
                                                                      <p>[bluetooth Call] Bakeey CK30 Temperature Measurement Heart Rate Blood Pressure....</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="text-center">
                                                      <div className="my-cart-wv-shoppingcart-order-all-product-text-inc-dec">
                                                          <div className="def-number-input number-input">
                                                              <button className="my-cart-wv-shoppingcart-order-dec-wv-btn" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                              <input className="quantity my-cart-wv-shoppingcart-order-input-fld" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                              type="number" />
                                                              <button className="my-cart-wv-shoppingcart-order-incc-wv-btn" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="text-center">
                                                      <div className="my-cart-wv-shoppingcart-order-prod-price-txt">
                                                          <h3><span>৳</span> 1200</h3>
                                                      </div>
                                                      {/* Wishlist and Delete btn */}
                                                      <div className="my-cart-wv-shoppingcart-wishlst-and-delete-btn">
                                                          <ul>
                                                              <li className="my-cart-wv-shoppingcart-wishlst-only-wv"><button><i class="fas fa-heart"></i></button></li>
                                                              <li className="my-cart-wv-shoppingcart-delete-only-wv"><button><i class="far fa-trash-alt"></i></button></li>
                                                          </ul>
                                                      </div>
                                                      {/* Wishlist and Delete btn */}
                                                  </td>
                                              </tr>
                                              {/* Single Item end */}
                                              {/* Single Item start */}
                                              <tr>
                                                  <td style={{width: '55%'}}>
                                                      <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-det">
                                                          <div className="row my-cart-wv-shoppingcart-order-all-product-sn-expdd">
                                                              <div className="col-md-3">
                                                                  <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-img">
                                                                      <img src={require('../../assets/cart-product-4.png')} alt="orponbd online shop"/>
                                                                  </div>
                                                              </div>
                                                              <div className="col-md-9">
                                                                  <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-content">
                                                                      <p>[bluetooth Call] Bakeey CK30 Temperature Measurement Heart Rate Blood Pressure....</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="text-center">
                                                      <div className="my-cart-wv-shoppingcart-order-all-product-text-inc-dec">
                                                          <div className="def-number-input number-input">
                                                              <button className="my-cart-wv-shoppingcart-order-dec-wv-btn" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                              <input className="quantity my-cart-wv-shoppingcart-order-input-fld" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                              type="number" />
                                                              <button className="my-cart-wv-shoppingcart-order-incc-wv-btn" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="text-center">
                                                      <div className="my-cart-wv-shoppingcart-order-prod-price-txt">
                                                          <h3><span>৳</span> 1200</h3>
                                                      </div>
                                                      {/* Wishlist and Delete btn */}
                                                      <div className="my-cart-wv-shoppingcart-wishlst-and-delete-btn">
                                                          <ul>
                                                              <li className="my-cart-wv-shoppingcart-wishlst-only-wv"><button><i class="fas fa-heart"></i></button></li>
                                                              <li className="my-cart-wv-shoppingcart-delete-only-wv"><button><i class="far fa-trash-alt"></i></button></li>
                                                          </ul>
                                                      </div>
                                                      {/* Wishlist and Delete btn */}
                                                  </td>
                                              </tr>
                                              {/* Single Item end */}
                                              

                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                              {/* Shopping Cart Order End ---------------------------Order*/}

                              {/* Summery Start */}
                              <div className="my-cart-wv-shoppingcart-order-summary-section-content-right-sidebar-fixed">
                                {/* Order Summary Color */}
                                <div className="my-cart-wv-shoppingcart-order-summary-section-content-color-txtt-right">
                                    <h4>Total Amount</h4>
                                    <div className="my-cart-wv-shoppingcart-order-summary-section-brdrr-right"></div>
                                </div>
                                {/* Order Summary Color */}

                                {/* Total Subtotal start */}
                                <div className="my-cart-wv-shoppingcart-order-total-subtotal-main-box">
                                    <div className="my-cart-wv-shoppingcart-order-total-subtotal-single-itm">
                                        <p>Subtotal :</p>
                                        <span className="my-cart-wv-shoppingcart-order-total-subtotal-amnt-ab">
                                          <h3><span>৳</span> 2400</h3>
                                        </span>
                                    </div>
                                    <div className="my-cart-wv-shoppingcart-order-total-subtotal-single-itm">
                                        <p>Delivery Charge :</p>
                                        <span className="my-cart-wv-shoppingcart-order-total-subtotal-amnt-ab">
                                          <h3><span>৳</span> 60</h3>
                                        </span>
                                    </div>
                                    <div className="my-cart-wv-shoppingcart-order-total-subtotal-single-itm total-itemxs">
                                        <p>Total <span>(2 Items)</span></p>
                                        <span className="my-cart-wv-shoppingcart-order-total-subtotal-amnt-ab total-itemxspz">
                                          <h3><span>৳</span> 2460</h3>
                                        </span>
                                    </div>
                                </div>
                                {/* Total Subtotal end */}

                              </div>
                              {/* Summery End */}
                            </div>
                        </div>
                      </div>
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
export default MyCartPage
