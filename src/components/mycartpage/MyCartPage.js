import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MoreToLoveAllProducts from '../allsections/moretoloveallproducts/MoreToLoveAllProducts';
import TopBarMenu from '../allsections/topbarsection/TopBarMenu';
import './mycartpage.css';

class MyCartPage extends Component {

componentDidMount() {
    window.scrollTo(0, 0)
    }

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
                                    <div className="obd-preorder-mycart-user-form-input-field">
                                        <label htmlFor="name">Name :</label>
                                        <input type="text" name="name" placeholder="Enter your Name"/>
                                    </div>
                                    
                                    <div className="obd-preorder-mycart-user-form-input-field">
                                        <label htmlFor="phone">Mobile Number :</label>
                                        <input type="text" name="phone" placeholder="Enter your Mobile Number.."/>
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
                              <div className="my-cart-wv-order-smry-cont-color-txtt">
                                  <h4>Product Items</h4>
                                  <div className="my-cart-wv-order-summary-ttxt">
                                      <span className="my-cart-wv-sm-order-sum-itm"><span><p><span>7</span> Items</p></span></span>
                                  </div>
                                  <div className="my-cart-wv-sm-order-sum-itm-brdrr"></div>
                              </div>
                              {/* Shopping Cart color */}
                              {/* Shopping Cart Order Start ---------------------------Order*/}
                              <div className="obd-preorder-all-product-itemsx-main-bbox">

                                  <div className="obd-preorder-all-product-itemsx-prod-box">
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
                                                    <div className="obd-preorder-all-itemsx-sing-prdo-det">
                                                        <div className="row obd-preorder-all-itemsx-sing-prdo-expdd">
                                                            <div className="col-md-3">
                                                                <div className="obd-preorder-all-itemsx-sing-prdo-img">
                                                                    <img src={require('../../assets/cart-product-3.png')} alt="orponbd online shop"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="obd-preorder-all-itemsx-sing-prdo-content">
                                                                <Link to="/">
                                                                    Bakeey CK30 Temperature Measurement Max Two Line Here....
                                                                </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="obd-preorder-all-itemsx-product-text-inc-dec">
                                                        <div className="def-number-input number-input">
                                                            <button className="my-cart-wv-tbl-order-dec-wv-btn" onClick={this.decrease}>
                                                                <i class="fas fa-minus"></i>
                                                            </button>
                                                            <input className="quantity obd-z-order-input-fld" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                            type="number" />
                                                            <button className="my-cart-wv-tbl-order-incc-wv-btn" onClick={this.increase}>
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="my-cart-wv-shoppingcart-order-prod-price-txt">
                                                        <h3><span>???</span> 1200</h3>
                                                    </div>
                                                    {/* Wishlist and Delete btn */}
                                                    <div className="obd-p-wish-and-dlt-btn">
                                                        <ul>
                                                            <li className="obd-p-btn-wishlst-only-wv">
                                                                <button><i class="fas fa-heart"></i></button>
                                                            </li>
                                                            <li className="obd-p-btn-delete-only-wv">
                                                                <button><i class="far fa-trash-alt"></i></button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* Wishlist and Delete btn */}
                                                </td>
                                            </tr>
                                            {/* Single Item end */}
                                            {/* Single Item start */}
                                            <tr>
                                                <td style={{width: '55%'}}>
                                                    <div className="obd-preorder-all-itemsx-sing-prdo-det">
                                                        <div className="row obd-preorder-all-itemsx-sing-prdo-expdd">
                                                            <div className="col-md-3">
                                                                <div className="obd-preorder-all-itemsx-sing-prdo-img">
                                                                    <img src={require('../../assets/cart-product-4.png')} alt="orponbd preorder"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="obd-preorder-all-itemsx-sing-prdo-content">
                                                                <Link to="/">
                                                                    Bakeey CK30 Temperature Measurement Max Two Line Here....
                                                                </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="obd-preorder-all-itemsx-product-text-inc-dec">
                                                        <div className="def-number-input number-input">
                                                            <button className="my-cart-wv-tbl-order-dec-wv-btn" onClick={this.decrease}>
                                                                <i class="fas fa-minus"></i>
                                                            </button>
                                                            <input className="quantity obd-z-order-input-fld" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                            type="number" />
                                                            <button className="my-cart-wv-tbl-order-incc-wv-btn" onClick={this.increase}>
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="my-cart-wv-shoppingcart-order-prod-price-txt">
                                                        <h3><span>???</span> 1200</h3>
                                                    </div>
                                                    {/* Wishlist and Delete btn */}
                                                    <div className="obd-p-wish-and-dlt-btn">
                                                        <ul>
                                                            <li className="obd-p-btn-wishlst-only-wv">
                                                                <button><i class="fas fa-heart"></i></button>
                                                            </li>
                                                            <li className="obd-p-btn-delete-only-wv">
                                                                <button><i class="far fa-trash-alt"></i></button>
                                                            </li>
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
                              <div className="obd-preorder-all-itemz-total-price-main-bx">
                                {/* Order Summary Color */}
                                <div className="obd-preorder-all-itemz-total-pri-color-txtt">
                                    <h4>Total Amount</h4>
                                    <div className="obd-pre-all-itemz-total-pri-brdrr-right"></div>
                                </div>
                                {/* Order Summary Color */}

                                {/* Total Subtotal start */}
                                <div className="obd-pre-all-itemz-subtotal-main-box">
                                    <div className="obd-pre-all-itemz-subtotal-single-itm">
                                        <p>Subtotal :</p>
                                        <span className="obd-pre-all-itemz-subtotal-amnt-ab">
                                          <h3><span>???</span> 2400</h3>
                                        </span>
                                    </div>
                                    <div className="obd-pre-all-itemz-subtotal-single-itm">
                                        <p>Delivery Charge :</p>
                                        <span className="obd-pre-all-itemz-subtotal-amnt-ab">
                                          <h3><span>???</span> 60</h3>
                                        </span>
                                    </div>
                                    <div className="obd-pre-all-itemz-subtotal-single-itm total-itemxs">
                                        <p>Total <span>(2 Items)</span></p>
                                        <span className="obd-pre-all-itemz-subtotal-amnt-ab total-itemxspz">
                                          <h3><span>???</span> 2460</h3>
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
