import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../kitchenaccessories/allcategorydetails.css';

import TopBarMenu from '../../allsections/topbarsection/TopBarMenu';
import CategoryItemBox from '../../allsections/categoryitembox/CategoryItemBox';

export default class WomensFashion extends Component {
    render() {
        return (
            <>
            <div className="obd-preorder-page-web-top-menu">
                <TopBarMenu/>
            </div>

            {/* Category Item Start */}
            <div className="obd-preorder-category-sub-box">
                <CategoryItemBox/>
            </div>
            {/* Category Item End */}

            <div className="obd-category-details-sort-txt-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="obd-category-details-section-item-txt-wv">
                                <h1>Women's Fashion For You</h1>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="obd-category-details-section-right-sort text-right">
                                <select>
                                    <option value="" selected>Short By: Default</option>
                                    <option value="">Orders</option>
                                    <option value="">Price(high to low)</option>
                                    <option value="">Price(low to high)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category All Products Start */}
            <div className="obd-category-details-section-product-main-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-category-details-section-product-box-ex">
                                {/* Single Row Start */}
                                <div className="row obd-category-details-section-product-bx-ex-pd">
                                    {/* Single product Start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-7.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product End */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-2.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-3.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-4.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-5.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-6.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Row End */}
                                {/* Single Row Start */}
                                <div className="row obd-category-details-section-product-bx-ex-pd">
                                    {/* Single product Start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product End */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-2.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-3.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-4.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-5.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="obd-category-details-section-product-snnggl-itm">
                                            <Link to="/#">
                                                <div className="obd-category-details-section-product-snnggl-itm-img">
                                                    <img src={require('../../../assets/more-all-products-6.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-category-details-section-product-snnggl-itm-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Row End */}
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Category All Products End */}

           <div className="obd-only-for-new-arrival-view-more-buttonn">
                <div className="moreto-love-web-version-view-more-btn text-center">
                    <button>View More <span><i className="fas fa-angle-down"></i></span></button>
                </div>
           </div>

            </>
        )
    }
}