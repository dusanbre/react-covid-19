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
            <div className={`card border-${klasa} mb-3`} >
                <div className="card-header">Info Covid-19</div>
                <div className={`card-body text-${klasa}`}>
                    <h5 className="card-title">{country}</h5>
                    <p className="card-text">Cases: {cases}</p>
                    <p className="card-text">Today Cases: {todayCases}</p>
                    <p className="card-text">Deaths: {deaths}</p>
                    <p className="card-text">Today Deaths: {todayDeaths}</p>
                    <p className="card-text">Today Deaths: {todayDeaths}</p>
                    <p className="card-text">Recovered: {recovered}</p>
                    <p className="card-text">Total Tested: {totalTests}</p>
                </div>
                <div className={`card-footer bg-transparent border-${klasa}`}>Active Now: {active}</div>
            </div>
            </div>
        )
    }
}

export default CountyItem
