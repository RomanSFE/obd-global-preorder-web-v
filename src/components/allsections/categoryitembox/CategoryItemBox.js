import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TopBarMenu from '../topbarsection/TopBarMenu'
import './categoryitembox.css'

export default class CategoryItemBox extends Component {
    render() {
        return (
            <>
            <div className="obd-preorder-page-web-top-menu">
                <TopBarMenu/>
            </div>

            {/* Top Banner Box Start */}
            <div className="obd-pre-order-category-section-web-box">
                <div className="container">
                    <div className="row obd-pre-order-categ-exx-pdd">
                        <div className="col-md-12">
                            <div className="pre-order-section-categ-boxs-wb-content-box">
                                {/* <div className="pre-order-texxt-comtent-categ-hedd-text">
                                    <h4>Preorder</h4>
                                    <p> 
                                        Shop globally with Orpon BD, <br/>
                                        Preorder your desire product today!
                                    </p>
                                </div> */}
                                {/* Single Row Start */}
                                <div className="row pre-order-cat-box-exx-cat-ex-pd">
                                    {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/kitchen-accessories">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../../assets/pre-order-kitchen-1.png')} alt="orponbd online shop"/>
                                                    <p>Kitchen Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/mens-fashion">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../../assets/pre-order-menn-2.png')} alt="orponbd online shop"/>
                                                    <p>Men's Fashion</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                      {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/womens-fashion">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../../assets/pre-order-womens-3.png')} alt="orponbd online shop"/>
                                                    <p>Women's Fashion</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/home-and-living">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../../assets/pre-order-home-livv-4.png')} alt="orponbd online shop"/>
                                                    <p>Home & Living</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                </div>
                                {/* Single Row End */}

                                {/* Single Row Start */}
                                <div className="row pre-order-cat-box-exx-cat-ex-pd">
                                    {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/baby-zone">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../../assets/pre-order-kitchen-1.png')} alt="orponbd online shop"/>
                                                    <p>Baby Zone</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/smart-watches">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../../assets/pre-order-menn-2.png')} alt="orponbd online shop"/>
                                                    <p>Smart Watches</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                      {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/mobile-accessories">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../../assets/pre-order-womens-3.png')} alt="orponbd online shop"/>
                                                    <p>Mobile Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/accessories">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../../assets/pre-order-home-livv-4.png')} alt="orponbd online shop"/>
                                                    <p>Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                </div>
                                {/* Single Row End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Banner Box End */}
            </>
        )
    }
}
