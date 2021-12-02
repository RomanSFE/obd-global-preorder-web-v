import React, { Component } from 'react';
import TopBarMenu from '../allsections/topbarsection/TopBarMenu.js';
import PreOrderDetails from '../preorderdetails/PreOrderDetails.js';


export default class HomePageWeb extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

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
