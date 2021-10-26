import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './topmenusection.css';

import Modal from 'react-bootstrap/Modal';

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs


class TopMenuSection extends Component {

    // View More Modal
    constructor(props) {
		super(props);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}
	handleClose() {
		this.setState({ show: false });
	}
	handleShow() {
		this.setState({ show: true });
	}
    // View More Modal

    render() {

        return (
            <>
            {/* Top small Menu  */}
            <div className="orpon-bd-main-web-version-topmenu-small-menu-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="orpon-bd-main-web-version-topmenu-small-menu-left-sse">
                                <p><span><i className="fas fa-phone"></i></span> 01759874611</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="orpon-bd-main-web-version-topmenu-small-menu-right-sec text-right">
                                <ul>
                                    <li><Link to="#">Track My Order</Link></li>
                                    <li><Link to="#">Buyer Protection</Link></li>
                                    <li><Link to="#">Help</Link></li>
                                    <li><Link to="#">New App</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top small Menu */}

           
            <div className="orpon-bd-main-web-version-topmenu-section">
                <div className="container">
                    <div className="row orpon-bd-main-web-version-topmenu-section-row-exx-pdd">
                        <div className="col-md-3">
                            <div className="orpon-bd-main-web-version-topmenu-logo-section text-center">
                                <Link to="/">
                                    <img src={require('../../assets/logomain.svg')} alt="OrponBD Online shop"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="orpon-bd-main-web-version-topmenu-search-box-sec-main">
                                <div className="orpon-bd-main-web-version-topmenu-serch-cat-sec">
                                    <button>Select Categories <span><i className="fas fa-angle-down"></i></span> </button>
                                </div>
                                <div className="orpon-bd-main-web-version-topmenu-search-boxx">
                                    <input type="search" placeholder="Enter Product Name...."/>
                                    <span><button type="submit"><i className="fas fa-search"></i> Search</button></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="orpon-bd-main-web-version-topmenu-search-right-user-signup-sec">
                                <ul>
                                    <li className="orpon-bd-main-web-version-topmenu-only-sign-in">
                                        <Link to="#">
                                            <span><img src={require('../../assets/sign-in-profile.png')} alt="OrponBD Online shop"/>{!this.props.customerLoggedIn ? (<span>Sign in</span>) : (<span>{this.props.customerName.name.substring(0,5)}</span>)}</span>
                                        </Link>

                                        {/* Sign in main box start */}
                                        <div className="orpon-bd-main-web-version-topmenu-signin-register-sec">
                                            <div className="orpon-bd-main-web-version-topmenu-signin-register-btnnx-signinx text-center">
                                                <button onClick={this.handleShow}>Sign In</button>
                                            </div>
                                            <div className="orpon-bd-main-web-version-topmenu-signin-register-btnnx-registerx text-center">
                                                <button onClick={this.handleShow}>Join US</button>
                                            </div>

                                            {/* Modal Start */}
                                            <Modal size="sm" show={this.state.show} onHide={this.handleClose}>
                                                <Modal.Header closeButton></Modal.Header>
                                                
                                                <Modal.Body>
                                                <div className="orpon-bd-main-web-version-topmenu-signin-register-logo-modal-img text-center">
                                                    <img src={require('../../assets/signin-logo-img.png')} alt="OrponBD Online shop"/>
                                                </div>

                                                    <Tabs className="sometexttt">
                                                        <div className="obd-tab-section-flash-deal-detailsonly-tabbss-webx text-center">
                                                            <TabList>
                                                                <Tab>Sign In</Tab>
                                                                <Tab>Join Us</Tab>
                                                            </TabList>
                                                        </div>
                                                        <TabPanel>
                                                            <div className="obd-customer-main-user-login-form-main-sec">
                                                                <form action="">

                                                                    <div className="obd-customer-dashboard-user-login-form-main-sec-content">

                                                                        <div className="obd-customer-signin-dashboard-user-login-form-input-field">
                                                                            <input type="text" name="email" placeholder="Enter your email or Phone"/>
                                                                            
                                                                        </div>

                                                                        <div className="obd-customer-signin-dashboard-user-login-form-input-field">
                                                                            <input type="password" name="password" placeholder="Enter your password"/>
                                                                            
                                                                        </div>

                                                                        <div className="obd-customer-dash-user-login-form-secx text-left">
                                                                            <input type="checkbox"/><span>Remember Me</span>
                                                                            <Link to="/customer-forget-password">Forget your password?</Link>
                                                                        </div>

                                                                        <div className="obd-customer-dashboard-user-login-form-signin-btnx">
                                                                            <button type="submit">Sign In</button>
                                                                        </div>

                                                                        <div className="obd-customer-dashboard-user-login-orr-social-section text-center">
                                                                            <div className="obd-customer-dashboard-user-login-orr-social-or">
                                                                                <p>Or</p>
                                                                                <h3>Login with</h3>
                                                                            </div>
                                                                            <div className="obd-customer-dashboard-user-login-orr-social-social-icon">
                                                                                <ul>
                                                                                    <li className="obd-customer-login-orr-social-icon-ggl"><Link to=""><i class="fab fa-google"></i></Link></li>
                                                                                    <li className="obd-customer-login-orr-social-icon-fb"><Link to=""><i class="fab fa-facebook-f"></i></Link></li>
                                                                                    <li className="obd-customer-login-orr-social-icon-ttr"><Link to=""><i class="fab fa-twitter"></i></Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </TabPanel>

                                                        <TabPanel>
                                                            <div className="obd-customer-main-user-login-form-main-sec">
                                                                <form action="">
                                                                    <div className="obd-customer-dashboard-user-login-form-main-sec-content">

                                                                        <div className="obd-customer-signin-dashboard-user-login-form-input-field">
                                                                            <input type="text" name="name" placeholder="Enter your Name"/>
                                                                            
                                                                        </div>

                                                                        <div className="obd-customer-signin-dashboard-user-login-form-input-field">
                                                                            <input type="text" name="phone"  placeholder="Enter your Phone Number"/>
                                                                            
                                                                        </div>

                                                                        <div className="obd-customer-signin-dashboard-user-login-form-input-field">
                                                                            <input type="email" name="email" placeholder="Enter your email"/>
                                                                            
                                                                        </div>

                                                                        <div className="obd-customer-signin-dashboard-user-login-form-input-field">
                                                                            <input type="password" name="password" placeholder="Enter your password"/>
                                                                            
                                                                        </div>

                                                                        <div className="obd-customer-dash-user-login-form-secxz text-left">
                                                                            <input type="checkbox" name="i_agree_terms_condition" /><span>I agree to <strong>Orpon BD</strong> <span><Link to="">Terms of use</Link></span> and <span><Link to="">Privacy Policy</Link></span></span>
                                                                          
                                                                        </div>

                                                                        <div className="obd-customer-dashboard-user-login-form-signin-btnx">
                                                                            <button type="submit">Create Account</button>
                                                                        </div>

                                                                        <div className="obd-customer-dashboard-user-login-orr-social-section text-center">
                                                                            <div className="obd-customer-dashboard-user-login-orr-social-or">
                                                                                <p>Or</p>
                                                                                <h3>Join us using</h3>
                                                                            </div>
                                                                            <div className="obd-customer-dashboard-user-login-orr-social-social-icon">
                                                                                <ul>
                                                                                    <li className="obd-customer-login-orr-social-icon-ggl"><Link to=""><i class="fab fa-google"></i></Link></li>
                                                                                    <li className="obd-customer-login-orr-social-icon-fb"><Link to=""><i class="fab fa-facebook-f"></i></Link></li>
                                                                                    <li className="obd-customer-login-orr-social-icon-ttr"><Link to=""><i class="fab fa-twitter"></i></Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </TabPanel>

                                                    </Tabs>
                                                </Modal.Body>
                                                
                                            </Modal>
                                            {/* Modal End*/}

                                            <div className="orpon-bd-main-web-version-topmenu-signin-register-menu-item-box">
                                                <ul>
                                                    <li><Link to="#">My Order</Link></li>
                                                    <li><Link to="#">My Wishlist</Link></li>
                                                    <li><Link to="#">My Coupons</Link></li>
                                                    <li><Link to="#">My Wallet</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Sign in main box end */}
                                    </li>
                                    <li className="orppon-bd-cart-web-abb-sec">
                                        <Link to="/my-cart">
                                            <img src={require('../../assets/cart-main.png')} alt="OrponBD Online shop"/> <span>10</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu and Category Section start */}
            <div className="orpon-bd-main-web-version-topmenu-menu-and-category-section-box">
                <div className="container">
                    <div className="row orpon-bd-main-web-version-topmenu-menu-extrra-bbtn-ctg">
                        <div className="col-md-3 home-cat-mainn-bbtn-hmmm-ppdf">
                            <div className="category-dropdownn-main-webb-wrap-ctt">
                                <div className="orpon-bd-main-web-version-topmenu-onlyy-web-category">
                                    <button>Categories <span><i className="fas fa-angle-down"></i></span></button>
                                </div>
                                <div className="category-dropdownn-main-webb-cat-content">
                                    <ul>
                                        <li><Link to="#">Category Name 1</Link></li>
                                        <li><Link to="#">Category Name 2 Category Name 3 Category Name 3</Link></li>
                                        <li><Link to="#">Category Name 3</Link></li>
                                        <li><Link to="#">Category Name 4</Link></li>
                                        <li><Link to="#">Category Name 5</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="orpon-bd-main-web-version-topmenu-onlyy-mennnu-web-section">
                                <ul>
                                    <li><Link to="">Home</Link></li>
                                    <li><Link to="">Why Shop With Us</Link></li>
                                    <li><Link to="">11.11 Mega Sale</Link></li>
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu and Category Section end */}
            </>
        )
    }
}




export default TopMenuSection;