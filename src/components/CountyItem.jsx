import React, { Component } from 'react'



export class CountyItem extends Component {
    render() {
        const {country, cases, todayCases, deaths, todayDeaths, recovered, active, totalTests} = this.props.country;
        let klasa = '';
        let klasaNone = '';
        if(cases <= 1000 ){
            klasa = 'success'
        }else if(cases >= 1001 && cases <=10000 ){
            klasa = 'warning'
        }else if(cases >= 10001){
            klasa = 'danger'
        }
        if(country == ""){
            klasaNone = 'none-display';
        }
        return (
            <div className={`col-lg-4 mt-3 ${klasaNone}`}>
                
                    <div className={`card border-${klasa} mb-3 card-wrapper`} >
                    <div className="card-header card-custom-header">{country}</div>
                    <div className={`card-body text-${klasa}`}>
                        <p className="card-text card-text-custom">Cases: <span className="cov-podatak">{cases}</span></p>
                        <p className="card-text card-text-custom">Today Cases: <span className="cov-podatak">{todayCases}</span></p>
                        <p className="card-text card-text-custom">Deaths: <span className="cov-podatak">{deaths}</span></p>
                        <p className="card-text card-text-custom">Today Deaths: <span className="cov-podatak">{todayDeaths}</span></p>
                        <p className="card-text card-text-custom">Recovered: <span className="cov-podatak">{recovered}</span></p>
                        <p className="card-text card-text-custom">Total Tested: <span className="cov-podatak">{totalTests}</span></p>
                    </div>
                    <div className={`card-footer card-custom-footer border-${klasa}`}></div>
                    </div>
                
            </div>
        )
    }
}

export default CountyItem
