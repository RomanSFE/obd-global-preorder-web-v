import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './userotp.css';
import OtpInput from 'react-otp-input';

export default class UserOtp extends Component {
    state = { otp: '' };

    handleChange = (otp) => this.setState({ otp });

    render() {

        return (
            <>
            <div className="user-obd-otp-wv-main-section-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="preorder-otp-wv-main-sec-box-sec-content mx-auto">

                                <div className="obd-preorder-otp-wv-main-hedd-txt text-center">
                                    <h3>Complete Verification </h3>
                                    <p>Enter the code we just send on your <br/> mobile phone <span>+8801749856784</span></p>
                                </div>

                               <div className="obd-preorder-otp-wv-box-sec-inppt text-center">
                                <OtpInput
                                        value={this.state.otp}
                                        onChange={this.handleChange}
                                        numInputs={4}
                                        separator={<span>-</span>}
                                    />
                               </div>

                               <div className="obd-preorder-otp-wv-txt-dont-get-cod text-center">
                                    <h4>Don't receive the code? <span><button type="submit">Resend</button></span></h4>
                               </div>

                               <div className="preorder-otp-wv-box-sec-conf-btn text-center">
                                   <ul>
                                       <li><Link to="/">Back</Link></li>
                                       <li><button type="submit">Verify</button></li>
                                   </ul>
                               </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}