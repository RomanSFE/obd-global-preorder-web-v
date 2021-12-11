import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MoreToLoveAllProducts from '../allsections/moretoloveallproducts/MoreToLoveAllProducts';
import TopBarMenu from '../allsections/topbarsection/TopBarMenu';
import './productdetails.css';

import {Helmet} from "react-helmet";

class ProductDetails extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
      return (
          <>
          <div className="obd-preorder-page-web-top-menu">
              <TopBarMenu/>
          </div>

          {/* Meta Tags */}
          <Helmet>
              <meta charSet="utf-8" />
              <title>Product Main Title Here...</title>
              <meta name="description" content="Product Meta Description Here, Max 140-150 Characters.." />
          </Helmet>
          {/* Meta Tags */}

          {/* Product Details Section Start */}
          <div className="obd-pre-order-product-details-main-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="obd-pre-order-product-details-bg-wrap-bx">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="obd-pre-order-product-details-prod-img-sec">
                          <div className="obd-pre-order-product-details-prod-main-img">
                              <img src={require('../../assets/jersey-img.jpg')} alt="orponbd preorder"/>
                          </div>
                          <div className="obd-pre-order-product-details-prod-sm-img">
                            <ul>
                              <li>
                                <img src={require('../../assets/global-shoppng-22.png')} alt="orponbd preorder"/>
                              </li>
                              <li>
                                <img src={require('../../assets/global-shoppng-21.png')} alt="orponbd preorder"/>
                              </li>
                              <li>
                                <img src={require('../../assets/global-shoppng-23.png')} alt="orponbd preorder"/>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="obd-pre-order-product-details-prod-content-bx">
                            <h1>Wood Handle Makeup Brush Set, Max Two Lines Here...</h1>
                            <p>Price : <span>৳</span> 550 <span><del><span>৳</span> 650</del></span></p>
                        </div>
                        <div className="obd-pre-order-product-details-prod-short-desc">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, vel tempore.
                            Dolorem perspiciatis aut laudantium? Expedita, quos eaque officiis nulla
                            dolores aspernatur temporibus, magnam error saepe asperiores voluptates
                            voluptas repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, vel tempore.
                            Dolorem perspiciatis aut laudantium? Expedita, quos eaque officiis nulla
                            dolores aspernatur temporibus, magnam error saepe asperiores voluptates
                            voluptas repellat. Lorem ipsum dolor sit amet consectetur
                          </p>
                        </div>
                        <div className="obd-pre-order-product-details-prod-content-buy-nw text-center">
                            <Link to="/my-cart">
                                Buy Now <span><i className="fas fa-angle-right"></i></span>
                            </Link>
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
export default ProductDetails
