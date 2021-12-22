import React, { Component } from 'react'
import './footersec.css';
import {Link} from 'react-router-dom';

export default class FooterSec extends Component {
    render() {
        return (
            <div className="obd-global-preorder-footermain-bx">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="obd-global-preorder-footermain-content text-center">
                                <h3>ORPONBD GLOBAL is the best of AliExpress, curated by creatives.</h3>
                                <p>2019 - Present ORPONBD GLOBAL. All right reserved.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="obd-global-preorder-footermain-lnks">
                                <ul>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/terms-of-service">Terms of Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
