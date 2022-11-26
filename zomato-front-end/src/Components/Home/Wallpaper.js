import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import "../Styles/wallpaper.css"



export default class Wallpaper extends Component {

    constructor() {
        super();
        this.state = {
            location: [],
            restaurant: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4500/location', { method: 'GET' })
            .then(Response => Response.json())
            .then(data => this.setState({ location: data.data }))
    }
    fetchRestaurantByCity = (event) => {
        fetch(`http://localhost:4500/restaurant/city/${event.target.value}`, { method: 'GET' })
            .then(Response => Response.json())
            .then(data => this.setState({ restaurant: data.data }))
    }


    render() {
        let locationList = this.state.location.length && this.state.location.map(item => <option key={item._id} value={item.city_id}>{item.name}</option>)
        let restaurantList = this.state.restaurant.length && <ul>{this.state.restaurant.map(item => <li key={item.name}><Link to={'/details'}>{item.name}</Link></li>)}</ul>
        return (
            <header>

                {/* <!-- Header Inner Div --> */}
                <div className="header-container">

                    {/* <!-- nav button  --> */}
                    <div className="nav-bar">
                        <button className="btn text-light">Login</button>
                        <button className="btn btn-outline-light">Sign Up</button>
                    </div>

                    {/* <!-- header main containt  --> */}
                    <div className="main-header-content">
                        <div className="logo">
                            <span id="logo-span">e!</span>
                        </div>

                        <h1>Find the best restaurants, cafés, and bars</h1>

                        {/* <!-- Restaurent Search Input  --> */}
                        <div className="restaurants-search-section">

                            <select name="location" id="IDlocation" className='col-lg-6 col-md-6 col-sm-12 locationDropdown' onChange={this.fetchRestaurantByCity}>
                                {locationList}
                            </select>

                            <div id="notebooks">
                                <input type="text" name="" id="" className='col-lg-6 col-md-6 col-sm-12 restaurantsinput' />
                                {restaurantList}
                            </div>


                        </div>
                    </div>

                </div>

            </header>
        )
    }
}

