import React, { Component } from 'react';
import TopBarMenu from '../allsections/topbarsection/TopBarMenu.js';
import PreOrderDetails from '../preorderdetails/PreOrderDetails.js';


export default class HomePageWeb extends Component {
    render() {
        return (
            <>
            <div className="home-page-main-webbb-section-boxxxx-page">
                <TopBarMenu/>
                <PreOrderDetails/>
            </div>
            </>
        )
    }
}
