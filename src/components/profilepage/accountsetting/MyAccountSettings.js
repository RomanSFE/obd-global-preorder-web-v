import React, { Component } from 'react'
import './myaccountsettings.css'

import UserProfileDashSidebar from '../userprofiledashsidebar/UserProfileDashSidebar'
import TopBarMenu from '../../allsections/topbarsection/TopBarMenu'
import MoreToLoveAllProducts from '../../allsections/moretoloveallproducts/MoreToLoveAllProducts'

export default class MyAccountSettings extends Component {
    // Image Upload
    constructor(props) {
		super(props);

		this.state = {
            // Image Upload
            file: '',
            imagePreviewUrl: ''
            // Image Upload End
		};
        // Image Upload
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        // Image Upload End
	}
	handleClose() {
		this.setState({ show: false });
	}
	handleShow() {
		this.setState({ show: true });
	}
    // Image Upload

    // Image Upload
    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    // Image Upload End
    render() {
        // Image Upload
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt=""/>);
        }
        // Image Upload
        return (
            <>
            <div className="obd-preorder-page-web-top-menu">
                <TopBarMenu/>
            </div>

           <div className="obd-profile-account-section-main-profile-section">
               <div className="container">
                   <div className="row">
                       <div className="col-md-2">
                            <UserProfileDashSidebar/>
                       </div>
                       <div className="col-md-10">
                           {/* Account Profile Start */}
                           <div className="account-top-section-main-profile-section-right-main-box">
                               {/* Account Setting Color  Start ------- */}
                                <div className="account-settingz-txt-sec-wv-content-color-txtt">
                                    <h4>Basic Information </h4>
                                    <div className="account-settingz-wv-support-summary-section-brdrr"></div>
                                </div>
                                {/* Account Setting Color  End ------- */}

                                {/* Account info form start */}
                                <div className="obd-main-web-version-account-setting-sec-form-main">
                                    <form action="">
                                        <div className="row obd-main-web-version-account-setting-sec-form-ex-pdd">
                                            <div className="col-md-3">
                                                <div className="obd-main-web-version-account-setting-sec-form-left-txtt">
                                                    <h4>Your Name:</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="obd-main-web-version-account-setting-sec-form-right-input">
                                                            <input type="text" placeholder="First Name.." />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="obd-main-web-version-account-setting-sec-form-right-input">
                                                            <input type="text" placeholder="Last Name.." />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row obd-main-web-version-account-setting-sec-form-ex-pdd">
                                            <div className="col-md-3">
                                                <div className="obd-main-web-version-account-setting-sec-form-left-txtt">
                                                    <h4>Profile Image:</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="obd-main-web-version-account-setting-sec-form-right-input">
                                                    {/* Image Upload */}
                                                    <div className="obd-account-settingg-wv-bx--main-img-upld">
                                                        <form onSubmit={this._handleSubmit}>
                                                            <input type="file" onChange={this._handleImageChange} />
                                                            <button type="submit" onClick={this._handleSubmit}>Choose Image File..</button>
                                                        </form>
                                                        {$imagePreview}
                                                    </div>
                                                    {/* Image Upload */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row obd-main-web-version-account-setting-sec-form-ex-pdd">
                                            <div className="col-md-3">
                                                <div className="obd-main-web-version-account-setting-sec-form-left-txtt">
                                                    <h4>Email:</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="obd-main-web-version-account-setting-sec-form-right-input">
                                                    <input type="email" placeholder="Email.." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row obd-main-web-version-account-setting-sec-form-ex-pdd">
                                            <div className="col-md-3">
                                                <div className="obd-main-web-version-account-setting-sec-form-left-txtt">
                                                    <h4>Password:</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="obd-main-web-version-account-setting-sec-form-right-input">
                                                    <input type="password" placeholder="Password.." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row obd-main-web-version-account-setting-sec-form-ex-pdd">
                                            <div className="col-md-3">
                                                <div className="obd-main-web-version-account-setting-sec-form-left-txtt">
                                                    <h4>Confirm Password:</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="obd-main-web-version-account-setting-sec-form-right-input">
                                                    <input type="password" placeholder="Confirm Password.." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row obd-main-web-version-account-setting-sec-form-ex-pdd">
                                            <div className="col-md-3">
                                                <div className="obd-main-web-version-account-setting-sec-form-left-txtt">
                                                    <h4>Mobile No:</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="obd-main-web-version-account-setting-sec-form-right-input">
                                                    <input type="text" placeholder="Mobile No.." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row obd-main-web-version-account-setting-sec-form-ex-pdd">
                                            <div className="col-md-3">
                                                <div className="obd-main-web-version-account-setting-sec-form-left-txtt">
                                                    <h4>Address:</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="obd-main-web-version-account-setting-sec-form-right-input">
                                                    <textarea name="" id="" cols="30" rows="10" placeholder="Address Here.."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row obd-main-web-version-account-setting-form-sbmnt-btn-ex-pdd text-right">
                                            <div className="col-md-12">
                                                <div className="obd-main-account-setting-sec-form-sbmnt-btn-sec">
                                                    <ul>
                                                        <li className="obd-main-account-setting-sec-form-sbmnt-confrm"><button type="submit">Update Profile</button></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* Account info form End */}
                           </div>
                           {/* Account Profile End */}
                       </div>
                   </div>
               </div>
           </div>

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
