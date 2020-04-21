import React, { Component } from 'react'

export class TopBar extends Component {
    render() {
        return (
            <div className="container-fluid topbar-container mb-5 pl-0 pr-0 pt-2 pb-2">
                <div className="row justify-content-center">
                    <div className="col-12 text-center columna-naslov"><span className="cov-naslov">Covid-19 Tracker</span></div>
                </div>
            </div>
        )
    }
}

export default TopBar
