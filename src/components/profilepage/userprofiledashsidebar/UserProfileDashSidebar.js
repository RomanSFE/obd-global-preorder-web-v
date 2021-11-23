import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './userprofiledashsidebar.css'

class UserProfileDashSidebar extends Component {
    render() {
        return (
            <>
            <div className="obd-profile-account-section-main-profile-left-menu-section-box">
                <div className="obd-profile-account-section-main-profile-left-menu-sect-itm">
                    <ul>
                        <li className="womennsss-main-cattt-wbv">
                            <NavLink 
                                tag={Link}
                                d="navResume"
                                className="inactive resumeImageHome"
                                activeClassName="activestyleclasshome"
                                to="/my-profile"
                                activeStyle={{
                                    fontWeight: "normal",
                                    color: "#fb4c2c"
                                }}>
                                    <span className="profile-imggg-none-img"><img src={require('../../../assets/profile-my-order-red.svg')} alt=""/></span>
                                    <span>My Profile</span>
                            </NavLink>
                        </li>
                        <li className="womennsss-main-cattt-wbv">
                            <NavLink 
                                tag={Link}
                                d="navResume"
                                className="inactive resumeImageHome"
                                activeClassName="activestyleclasshome"
                                to="/my-orders"
                                activeStyle={{
                                    fontWeight: "normal",
                                    color: "#fb4c2c"
                                }}>
                                    <span className="profile-imggg-none-img"><img src={require('../../../assets/profile-my-order-red.svg')} alt=""/></span>
                                    <span>My Orders</span>
                            </NavLink>
                        </li>
                        <li className="womennsss-main-cattt-wbv">
                            <NavLink 
                                tag={Link}
                                d="navResume"
                                className="inactive resumeImageAccSettings"
                                activeClassName="activestyleclassAccSettings"
                                to="/my-account-settings"
                                activeStyle={{
                                    fontWeight: "normal",
                                    color: "#fb4c2c"
                                }}>
                                    <span className="profile-imggg-none-img-wishlst-acc-set"><img src={require('../../../assets/profile-setting-red.svg')} alt=""/></span>
                                    <span>Account Setting</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </>
        );
    }
}

export default UserProfileDashSidebar;
