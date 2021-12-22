import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './preorderdetails.css';

export default class PreOrderDetails extends Component {
    render() {
        return (
            <>
            
            {/* Top Banner Box Start */}
            <div className="obd-pre-order-details-top-banner-section-web-box">
                <div className="container">
                    <div className="row obd-pre-order-details-top-banner-exx-pdd">
                        <div className="col-md-7">
                            <div className="pre-order-section-boxs-wb-content-box">
                                <div className="pre-order-texxt-comtent-hedd-text">
                                    <h4>Preorder</h4>
                                    <p> 
                                        Shop globally with Orpon BD, <br/>
                                        Preorder your desire product today!
                                    </p>
                                </div>
                                {/* Single Row Start */}
                                <div className="row pre-order-section-boxs-exx-cat-row">
                                    {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/kitchen-accessories">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-kitchen-1.png')} alt="orponbd online shop"/>
                                                    <p>Kitchen Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/mens-fashion">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-menn-2.png')} alt="orponbd online shop"/>
                                                    <p>Men's Fashion</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                      {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/womens-fashion">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-womens-3.png')} alt="orponbd online shop"/>
                                                    <p>Women's Fashion</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/home-and-living">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-home-livv-4.png')} alt="orponbd online shop"/>
                                                    <p>Home & Living</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                </div>
                                {/* Single Row End */}

                                {/* Single Row Start */}
                                <div className="row pre-order-section-boxs-exx-cat-row">
                                    {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/baby-zone">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-kitchen-1.png')} alt="orponbd online shop"/>
                                                    <p>Baby Zone</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/smart-watches">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-menn-2.png')} alt="orponbd online shop"/>
                                                    <p>Smart Watches</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                      {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/mobile-accessories">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-womens-3.png')} alt="orponbd online shop"/>
                                                    <p>Mobile Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/accessories">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-home-livv-4.png')} alt="orponbd online shop"/>
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
                        <div className="col-md-5">
                           <Link to="/">
                                <div className="pre-order-details-single-catt-box-wb-main-itm-right-banner">
                                    <img src={require('../../assets/pre-order-details-banner-wb.png')} alt="orponbd online shop"/>
                                </div>
                           </Link> 
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Banner Box End */}

            {/* This Section Show When Active Full Width Banner In The Backend */}
            {/* Top Banner Full */}
            {/* <div className="obd-top-banner-full-main-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="top-banner-full-img-sec">
                                <img src={require('../../assets/grocery-main-page-main-banner.png')} alt="online shop"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-banner-full-all-cattgryz">
                                <div className="row pre-order-section-boxs-exx-cat-row">
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/kitchen-accessories">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-kitchen-1.png')} alt="orponbd online shop"/>
                                                    <p>Kitchen Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/mens-fashion">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-menn-2.png')} alt="orponbd online shop"/>
                                                    <p>Men's Fashion</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/womens-fashion">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-womens-3.png')} alt="orponbd online shop"/>
                                                    <p>Women's Fashion</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/home-and-living">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-home-livv-4.png')} alt="orponbd online shop"/>
                                                    <p>Home & Living</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/baby-zone">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-kitchen-1.png')} alt="orponbd online shop"/>
                                                    <p>Baby Zone</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/smart-watches">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-menn-2.png')} alt="orponbd online shop"/>
                                                    <p>Smart Watches</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/mobile-accessories">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-womens-3.png')} alt="orponbd online shop"/>
                                                    <p>Mobile Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="/accessories">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-home-livv-4.png')} alt="orponbd online shop"/>
                                                    <p>Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Top Banner Full End */}
            {/* This Section Show When Active Full Width Banner In The Backend */}

            {/* Products Section start Kitchen Accessories */}
            <div className="obd-pre-order-wv-details-products-main-tp-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="obd-pre-order-wv-details-pd-hd-txt-wv">
                                <h1>Kitchen Accessories</h1>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="obd-pre-order-wv-details-pd-right-sort text-right">
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

            {/* Pre-order All Products Start */}
            <div className="obd-pre-order-wv-details-prod-main-secz">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-preorder-wv-det-section-all-prod-sec-box">
                                {/* Single Roww Start */}
                                <div className="row pre-order-wv-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-4.png')} alt="orponbd online shop"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-3.png')} alt="orponbd preorder"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-6.png')} alt="orponbd preorder"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-5.png')} alt="orponbd preorder"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}

                                {/* Single Roww Start */}
                                <div className="row best-sell-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-7.png')} alt="orponbd online shop"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-8.png')} alt="orponbd preorder"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-9.png')} alt="orponbd preorder"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Pre-Order KItchen All Products End */}

            <div className="obd-preorder-wv-details-see-allz text-center">
                <Link to="kitchen-accessories">View More</Link>
            </div>
            {/* Products Section end Kitchenn -------- */}
            
            {/* ------------------------ */}

            {/* Products Section start */}
            <div className="obd-pre-order-wv-details-products-main-tp-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="obd-pre-order-wv-details-pd-hd-txt-wv">
                                <h1>Men's Fashion</h1>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="obd-pre-order-wv-details-pd-right-sort text-right">
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


            {/* Pre-order All Products Start */}
            <div className="obd-pre-order-wv-details-prod-main-secz">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-preorder-wv-det-section-all-prod-sec-box">
                                {/* Single Roww Start */}
                                <div className="row pre-order-wv-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-5.png')} alt="orponbd online shop"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-3.png')} alt="orponbd preorder"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-6.png')} alt="orponbd preorder"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-5.png')} alt="orponbd preorder"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}

                                {/* Single Roww Start */}
                                <div className="row best-sell-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-7.png')} alt="orponbd online shop"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-8.png')} alt="orponbd preorder"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-9.png')} alt="orponbd preorder"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-preorder-wv-details-all-prod-sngl-itm">
                                        <Link to="/products-details">
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-img">
                                                <img src={require('../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="obd-preorder-wv-details-all-prod-sngl-itm-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <h3><span>৳</span> 1200</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Pre-Order KItchen All Products End */}

            <div className="obd-preorder-wv-details-see-allz text-center">
                <Link to="/mens-fashion">View More</Link>
            </div>
            {/* Products Section end Kitchenn -------- */}

            </>
        )
    }
}
