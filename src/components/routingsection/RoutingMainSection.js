import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class RoutingMainSection extends Component {
    render() {
        return (
            <>
            <div className="orponbd-main-routing-section-web-versn-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="orponbd-main-routing-section-web-versn-content">
                                <ul>
                                    <li><Link to="/">Home</Link></li>

                                    {/* Products Details Page */}
                                    <li><Link to="/products-details">Products Details Page</Link></li>
                                    {/* Products Page */}

                                    {/* My Cart Page */}
                                    <li><Link to="/my-cart">My Cart</Link></li>
                                    {/* My Cart Page */}

                                    {/* Category Details Page */}
                                    <li><Link to="/kitchen-accessories">Kitchen Accessories</Link></li>
                                    <li><Link to="/mens-fashion">Men's Fashion</Link></li>
                                    <li><Link to="/womens-fashion">Women's Fashion</Link></li>
                                    <li><Link to="/home-and-living">Home And Living</Link></li>
                                    <li><Link to="/baby-zone">Baby Zone</Link></li>
                                    <li><Link to="/smart-watches">Smart Watch</Link></li>
                                    <li><Link to="/mobile-accessories">Mobile Accessories</Link></li>
                                    <li><Link to="/accessories">Accessories</Link></li>
                                    {/* Category Details Page */}

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
