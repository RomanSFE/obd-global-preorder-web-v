import React, { Component } from 'react'
import './topbarmenu.css';
import {Link} from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs

class TopBarMenu extends Component {

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
            <div className="obd-pre-order-product-details-topbar-menu-main-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="obd-pre-order-product-details-topbar-logo-img">
                                <Link to="/">
                                    <img src={require('../../../assets/logomainx.png')} alt="orponbd preorder"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="obd-pre-order-product-details-topbar-right-sec text-right">
                                <ul>
                                    <li>
                                        <div className="obd-pre-order-product-details-topbar-rg-search">
                                            <input type="search" placeholder="Search.." /> <span><button type="submit"><i className="fas fa-search"></i></button></span>
                                        </div>
                                    </li>
                                    
                                    <li className="obd-main-web-v-pre-order-topmenu-only-sign-in">
                                        <Link to="#">
                                            <span><img src={require('../../../assets/sign-in-profile.png')} alt="OrponBD Online shop"/><span>Sign in</span></span>
                                        </Link>

                                        {/* Sign in main box start */}
                                        <div className="obd-preorder-w-v-topmenu-signin-register-sec">
                                            <div className="obd-main-web-v-top-m-signin-reg-btn-sign text-center">
                                                <button onClick={this.handleShow}>Sign In</button>
                                            </div>
                                            <div className="obd-main-web-v-top-m-regs-reg-btn-reg text-center">
                                                <button onClick={this.handleShow}>Join US</button>
                                            </div>

                                            {/* Modal Start */}
                                            <Modal size="" show={this.state.show} onHide={this.handleClose}>
                                                <Modal.Header closeButton></Modal.Header>
                                                
                                                <Modal.Body>
                                                <div className="obd-main-web-vr-topmenu-sig-reg-logo-modal-img text-center">
                                                    <img src={require('../../../assets/signin-logo-img.png')} alt="OrponBD Online shop"/>
                                                </div>

                                                    <Tabs className="sometexttt">
                                                        <div className="obd-tab-section-pre-order-d-tabbss-webx text-center">
                                                            <TabList>
                                                                <Tab>Sign Up</Tab>
                                                                <Tab>Join Us</Tab>
                                                            </TabList>
                                                        </div>
                                                        <TabPanel>
                                                            <div className="obd-preorder-gl-main-user-login-form-main-sec">
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
                                                                            <Link to="/">Forget your password?</Link>
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
                                                            <div className="obd-preorder-gl-main-user-login-form-main-sec">
                                                                <form action="">
                                                                    <div className="obd-preorder-gl-main-user-login-form-main-sec-content">

                                                                        <div className="obd-customer-signin-dashboard-user-login-form-input-field">
                                                                            <input type="text" name="name" placeholder="Enter your Name"/>
                                                                        </div>

                                                                        <div className="obd-customer-signin-dashboard-user-login-form-input-field">
                                                                            <input type="text" name="phone" placeholder="Enter your Phone Number"/>
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
                                        </div>
                                        {/* Sign in main box end */}
                                    </li>

                                    <li className="obd-preorder-cart-count-abb-sec">
                                        <Link to="/my-cart">
                                            <img src={require('../../../assets/cart-main.png')} alt="OrponBD Online shop"/> <span>10</span>
                                        </Link>
                                    </li>

                                    <li className="obd-main-web-v-pre-order-topmenu-only-hamb-mnu">
                                        <Link to="#">
                                            <span><i class="fas fa-bars"></i></span>
                                        </Link>

                                        {/* Sign in main box start */}
                                        <div className="obd-preorder-w-v-topmenu-hamg-all-mnu text-left">
                                            <div className="obd-preorder-w-v-topmenu-hamg-all-mnu-item">
                                                <ul>
                                                    <li>
                                                        <Link to="/my-profile">Profile</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="">Profile 2</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="">Profile 3</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="">Profile 4</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Sign in main box end */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default TopBarMenu
