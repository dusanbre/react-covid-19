import React, { Component } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import CountyItem from './CountyItem'

export class Home extends Component {

    state = {
        countries:[],
        isLoaded: false,
    }
    
    componentDidMount(){
        axios.get('/countries')
        .then(res => this.setState({
            countries: res.data,
            isLoaded: true,
            
        }))
        .catch(err => console.log(err))
    }
    render() {
        const {countries, isLoaded, keyCount} = this.state;
        console.log(this.state)
        if(isLoaded){
            return (
                <div className="container">
                    <div className="row">
                        {
                            countries.map((country, index) => (  
                            <CountyItem key={index} country={country} />
                            ))
                            
                        }
                    </div>
                </div>
            )
        }
        return <Spinner animation="border" />
    }
}

export default Home
